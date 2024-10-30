import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const ApprovedRequests = () => {
  const [requests, setRequests] = useState([]);
  const axios = useAxios();

  useEffect(()  => {
    if(!axios) return;
    
    axios.get('/absence/leaves/approved')
      .then(res => {
        setRequests(res.data.leaves);
      }).catch(err => {
        console.log(err);
      });
  },[axios]);

  return (
    <div className="p-4 bg-custompurple">
      <h2 className="text-xl font-normal font-lexend mb-4 -ml-5">Approved Requests</h2>
      {requests.map(request => (
        <div key={request.leave_id} className="bg-highpurple rounded-lg p-4 mb-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium font-manrope">{request.type}</h3>
            <p>From: {(new Date(request.start_date)).toDateString()} To: {(new Date(request.end_date)).toDateString()}</p>
          </div>
          <span className="text-blue-900 font-medium">Approved</span>
        </div>
      ))}
    </div>
  );
};

export default ApprovedRequests;
