import React from 'react';

export const CustomersList = ({
  customerName,
  company,
  phoneNumber,
  email,
  country,
  status,
  handleStatusChange,
}) => {
  const statusClass = status !== 'Active' ? ' list__item-status--inactive' : '';

  return (
    <tr className="list row">
      <td data-label="Customer Name" className="list__item" title={customerName}>
        {customerName}
      </td>
      <td data-label="Company" className="list__item" title={company}>
        {company}
      </td>
      <td data-label="Phone Number" className="list__item" title={phoneNumber}>
        {phoneNumber}
      </td>
      <td data-label="Email" className="list__item" title={email}>
        {email}
      </td>
      <td data-label="Country" className="list__item" title={country}>
        {country}
      </td>
      <td data-label="Status" className="list__item">
        <button
          className={'list__item-status' + statusClass}
          type="button"
          onClick={handleStatusChange}>
          {status}
        </button>
      </td>
    </tr>
  );
};
