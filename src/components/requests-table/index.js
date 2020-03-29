import React from 'react';
import format from 'date-fns/format';
import { NEED_TYPE_CHOICES } from '@src/constants';

const RequestsTableRow = ({ request }) => {
  const label = NEED_TYPE_CHOICES.find(
    ({ value }) => value === request.data.type
  ).label;

  return (
    <tr>
      <td>{label}</td>
      <td>
        {request.data.quantity} {request.data.unit}
      </td>
      <td>{format(new Date(request.data.date), 'MMMM d, yyyy')}</td>
      <td>{request.data.details}</td>
    </tr>
  );
};

const RequestsTable = ({ data }) => (
  <table className="table-responsive">
    <thead>
      <tr>
        <th>Type</th>
        <th>Quantity</th>
        <th>Date needed</th>
        <th>Details</th>
      </tr>
    </thead>

    <tbody>
      {data.map(request => (
        <RequestsTableRow key={request.id} request={request} />
      ))}
    </tbody>
  </table>
);

export default RequestsTable;
