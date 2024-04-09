import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { Root, ErrorPage, Customers, Product, Income, Promote, Help } from './routes/index';

const routerConfig = [
  {
    path: '/',
    element: React.createElement(Root),
    errorElement: React.createElement(ErrorPage),
    children: [
      {
        path: 'customers',
        element: React.createElement(Customers),
      },
      {
        path: 'product',
        element: React.createElement(Product),
      },
      {
        path: 'income',
        element: React.createElement(Income),
      },
      {
        path: 'promote',
        element: React.createElement(Promote),
      },
      {
        path: 'help',
        element: React.createElement(Help),
      },
    ],
  },
];

export default createHashRouter(routerConfig);
