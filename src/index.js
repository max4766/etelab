import React from 'react';
import ReactDOM from 'react-dom/client';
import DataTable from './js/DataTable';
import DataFetch from './js/DataFetch.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataTable />
    <DataFetch />
  </React.StrictMode>
);
