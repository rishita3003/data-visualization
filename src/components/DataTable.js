import React from 'react';
import '../styles/Dashboard.css';

function DataTable({ data }) {
  return (
    <div className="table-container">
      <h2>Data Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;