import React from 'react';

const ApprovedRequests = () => {
  // Sample data for approved requests
  const approvedRequests = [
    { id: 1, type: 'Annual Leave', from: '2024-06-01', to: '2024-06-04' },
    { id: 2, type: 'Maternity Leave', from: '2023-08-15', to: '2023-12-20' }
  ];

  return (
    <div className="p-4 bg-custompurple">
      <h2 className="text-xl font-normal font-lexend mb-4 -ml-5">Approved Requests</h2>
      {approvedRequests.map(request => (
        <div key={request.id} className="bg-highpurple rounded-lg p-4 mb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium font-manrope">{request.type}</h3>
            <p>From: {request.from} To: {request.to}</p>
          </div>
          <span className="text-blue-900 font-medium">Approved</span>
        </div>
      ))}
    </div>
  );
};

export default ApprovedRequests;
