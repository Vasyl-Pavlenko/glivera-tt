import React from 'react';
import { CUSTOMERS } from '../../const/data';
import { Pagination, CustomersList, SearchIcon } from '../../components/index';
import '../../styles/customers.css';

const HEAD_NAMES = ['Customer Name', 'Company', 'Phone Number', 'Email', 'Country', 'Status'];

export const Customers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [customersPerPage, setCustomersPerPage] = React.useState(8);
  const [query, setQuery] = React.useState('');
  const [filteredCustomers, setFilteredCustomers] = React.useState([]);
  const [statuses, setStatuses] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setCustomers(CUSTOMERS);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    if (query === '') {
      setFilteredCustomers(customers);
      setCurrentPage(1);
      return;
    }

    const filtered = customers.filter(({ customerName, company, email, country }) => {
      const lowerCaseQuery = query.toLowerCase().trim();

      return (
        (customerName && customerName.toLowerCase().includes(lowerCaseQuery)) ||
        (company && company.toLowerCase().includes(lowerCaseQuery)) ||
        (email && email.toLowerCase().includes(lowerCaseQuery)) ||
        (country && country.toLowerCase().includes(lowerCaseQuery))
      );
    });

    setFilteredCustomers(filtered);
    setCurrentPage(1);
  }, [query, customers]);

  const indexOfLastCustomers = Math.min(currentPage * customersPerPage, filteredCustomers.length);

  const indexOfFirstCustomer = currentPage * customersPerPage - customersPerPage;

  const currentCustomers = React.useMemo(() => {
    return filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomers);
  }, [filteredCustomers, indexOfFirstCustomer, indexOfLastCustomers]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusChange = (customerId) => {
    setFilteredCustomers((prevCustomers) => {
      return prevCustomers.map((customer) => {
        if (customer.id === customerId) {
          return {
            ...customer,
            status: customer.status === 'Active' ? 'Inactive' : 'Active',
          };
        }
        return customer;
      });
    });
  };

  return (
    <div className="customers">
      <div className="customers__header">
        <p className="customers__header-text">
          All Customers <span className="customers__header-text-span">Active Members</span>
        </p>

        <p className="customers__header-search">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="customers__header-input"
          />
        </p>
      </div>

      <table className="table">
        <thead className="table__head">
          <tr className="row">
            {HEAD_NAMES.map((name) => (
              <th key={name} className="table__head-content" title={name}>
                {name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentCustomers.map((customer) => (
            <CustomersList
              key={customer.id}
              {...customer}
              handleStatusChange={() => handleStatusChange(customer.id)}
            />
          ))}
        </tbody>
      </table>

      <footer className="footer">
        <span className="footer-text">
          {filteredCustomers.length > 0
            ? `Showing data ${indexOfFirstCustomer + 1} to ${indexOfLastCustomers} of ${
                filteredCustomers.length
              } entries`
            : 'No customers found'}
        </span>

        {filteredCustomers.length > 0 && (
          <Pagination
            length={filteredCustomers.length}
            customersPerPage={customersPerPage}
            handlePagination={handlePagination}
            currentPage={currentPage}
          />
        )}
      </footer>
    </div>
  );
};
