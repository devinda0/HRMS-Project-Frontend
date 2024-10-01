import React, { useState } from 'react';

const PendingRequests = () => {
  
  const [requests, setRequests] = useState([
    { id: 1, type: 'Casual Leave', from: '2024-10-10', to: '2024-10-12' },
    { id: 2, type: 'Annual Leave', from: '2024-11-01', to: '2024-11-15' }
  ]);

  const handleCancel = (id) => {
    
    const updatedRequests = requests.filter(request => request.id !== id);
    setRequests(updatedRequests);
  };

  return (
    <div className="p-4 bg-custompurple">
      <h2 className="text-xl font-normal font-lexend mb-4 -ml-5">Pending Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        requests.map(request => (
          <div key={request.id} className="bg-highpurple rounded-lg p-3 mb-4 flex justify-between items-center w-[668px]">
            <div>
              <h3 className="text-lg font-medium font-manrope">{request.type}</h3>
              <p>From: {request.from} To: {request.to}</p>
            </div>
            <button
              onClick={() => handleCancel(request.id)}
              className="bg-transparent border-2 border-blue-900 text-blue-900 py-1 px-4 rounded-lg hover:bg-blue-900 hover:text-white transition"
            >
              Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PendingRequests;
