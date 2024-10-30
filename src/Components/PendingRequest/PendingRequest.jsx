import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';
const PendingRequests = () => {
  
  const [requests, setRequests] = useState([]);
  const axios = useAxios();
  const { addWaiter, removeWaiter } = useWaitingSpinner();
  useEffect(()  => {
    if(!axios) return;
    addWaiter('pendingrequest');
    axios.get('/absence/leaves/pending')
      .then(res => {
        setRequests(res.data.leaves);
      }).catch(err => {
        console.log(err);
      })
      .finally(() => {
        removeWaiter('pendingrequest');
      });
  },[axios]);

  const handleCancel = (id) => {
    if(!axios) return;
    addWaiter('cancel');
    axios.put(`/absence/leave/cancel/${id}`)
      .then(res => {
        console.log(res.data);
        const updatedRequests = requests.filter(request => request.leave_id !== id);
        setRequests(updatedRequests);
      }).catch(err => {
        console.log(err);
      })
      .finally(() => {
        removeWaiter('cancel');
      });

  };

  return (
    <div className="p-4 bg-custompurple">
      <h2 className="text-xl font-normal font-lexend mb-4 -ml-5">Pending Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        requests.map((request, index) => (
          <div key={index} className="bg-highpurple rounded-lg p-3 mb-4 flex justify-between items-center w-[668px]">
            <div>
              <h3 className="text-lg font-medium font-manrope">{`${request.leave_type} Leave`}</h3>
              <p>From: {(new Date(request.start_date)).toDateString()} To: {(new Date(request.end_date)).toDateString()}</p>
              <p>{`Reason: ${request.reason}`}</p>
            </div>
            <button
              onClick={() => handleCancel(request.leave_id)}
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
