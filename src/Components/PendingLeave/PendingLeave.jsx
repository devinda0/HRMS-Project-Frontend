import React, { useState } from 'react';
import Leave from '../../pages/Leave/Leave';

const PendingLeave = () => {
  const [selectedLeave, setSelectedLeave] = useState(null);

  
  const pendingLeaves = {
    "12-12-2024": [
      {
        id: 1,
        type: 'Casual Leave',
        fromDate: '2024-10-10',
        toDate: '2024-10-12',
        employeeName: 'John Doe',
        post: 'HR Manager',
        date: "12-12-2024"
      },
      {
        id: 2,
        type: 'Casual Leave',
        fromDate: '2024-10-10',
        toDate: '2024-10-12',
        employeeName: 'Jane Smith',
        post: 'HR Manager',
        date: "12-12-2024"
      }
    ],
    "12-13-2024": [
      {
        id: 3,
        type: 'Casual Leave',
        fromDate: '2024-10-10',
        toDate: '2024-10-12',
        employeeName: 'Tom Brown',
        post: 'HR Manager',
        date: "12-13-2024"
      },
      {
        id: 4,
        type: 'Casual Leave',
        fromDate: '2024-10-10',
        toDate: '2024-10-12',
        employeeName: 'Alice Green',
        post: 'HR Manager',
        date: "12-13-2024"
      }
    ]
  };

  const handleViewDetails = (leave) => {
    setSelectedLeave(leave);
  };

  return (
    <div className="container mx-auto px-7 py-4 bg-ligreen">
      <h2 className="text-[32px] font-normal font-lexend mb-4">Pending Leave</h2>

      {Object.keys(pendingLeaves).map((date) => (
        <div key={date} className="mb-6">
          <div className="bg-white shadow mb-2 p-5">
            <h3 className="text-[24px] font-bold font-manrope mb-4">{date} {new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            {pendingLeaves[date].map((leave) => (
              <div key={leave.id} className="bg-highpurple rounded-lg px-3 py-2 mb-4 flex justify-between items-center w-full">
                <div>
                  <p className="text-lg font-medium font-manrope">{leave.type}</p>
                  <p className="text-gray-500 font-manrope">From: {leave.fromDate} To: {leave.toDate}</p>
                </div>
                <button
                  onClick={() => handleViewDetails(leave)}
                  className="bg-transparent border-2 border-blue-900 text-blue-900 py-1 px-4 rounded-lg hover:bg-blue-900 hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedLeave && (
        <Leave leave={selectedLeave} onClose={() => setSelectedLeave(null)} />
      )}
    </div>
  );
};

export default PendingLeave;
