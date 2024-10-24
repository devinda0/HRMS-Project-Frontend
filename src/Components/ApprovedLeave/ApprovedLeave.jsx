import React, { useState, useEffect } from 'react';
import Leave from '../../pages/Leave/Leave';
import useAxios from '../../hooks/useAxios';

const ApprovedLeave = () => {
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [leaves, setLeaves] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    if (!axios) return;

    axios.get('/absence/leaves/subordinates/approved')
      .then(res => {
        setLeaves(res.data.leaves);
      }).catch(err => {
        console.log(err);
      });
  }, [axios]);

  
  const approvedLeaves = {
    "10-12-2024": [
      {
        id: 1,
        type: 'Sick Leave',
        fromDate: '2024-12-01',
        toDate: '2024-12-03',
        employeeName: 'John Doe',
        post: 'Software Engineer',
        date: "10-12-2024"
      },
      {
        id: 2,
        type: 'Vacation Leave',
        fromDate: '2024-12-05',
        toDate: '2024-12-10',
        employeeName: 'Jane Smith',
        post: 'Product Manager',
        date: "10-12-2024"
      }
    ],
    "11-12-2024": [
      {
        id: 3,
        type: 'Casual Leave',
        fromDate: '2024-12-12',
        toDate: '2024-12-14',
        employeeName: 'Tom Brown',
        post: 'HR Manager',
        date: "11-12-2024"
      },
      {
        id: 4,
        type: 'Maternity Leave',
        fromDate: '2024-12-15',
        toDate: '2025-01-15',
        employeeName: 'Alice Green',
        post: 'Marketing Executive',
        date: "11-12-2024"
      }
    ]
  };

  const handleViewDetails = (leave) => {
    setSelectedLeave(leave);
  };

  return (
    <div className="container mx-auto px-7 py-4 bg-ligreen">
      <h2 className="text-[32px] font-normal font-lexend mb-4">Approved Leaves</h2>

      {leaves.map((leave) => (
        <div key={leave.leave_id} className="bg-highpurple rounded-lg px-3 py-2 mb-4 flex justify-between items-center w-full">
          <div>
            <p className="text-lg font-medium font-manrope">{`${leave.leave_type} Leave`}</p>
            <p className="text-gray-500 font-manrope">Employee: {leave.name}</p>
            <p className="text-gray-500 font-manrope">From: {(new Date(leave.start_date)).toISOString().split('T')[0]} To: {(new Date(leave.end_date)).toISOString().split('T')[0]}</p>
          </div>
          <button
            onClick={() => handleViewDetails(leave)}
            className="bg-transparent border-2 border-blue-900 text-blue-900 py-1 px-4 rounded-lg hover:bg-blue-900 hover:text-white transition"
          >
            View Details
          </button>
        </div>
      ))}

      {selectedLeave && (
        <Leave leave={selectedLeave} isApproved={true} onClose={() => setSelectedLeave(null)} />
      )}
    </div>
  );
};

export default ApprovedLeave;
