import React, { useState } from 'react';
import Leave from '../../pages/Leave/Leave';

const ApprovedLeave = () => {
  const [selectedLeave, setSelectedLeave] = useState(null);

  
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
    <div className="container mx-auto flex flex-col px-7 py-4 bg-customblue">
      <h2 className="text-[32px] font-normal font-lexend mb-4">Approved Leave</h2>

      {Object.keys(approvedLeaves).map((date) => (
        <div key={date} className="mb-6">
          <div className="bg-white shadow mb-2 p-5">
            <h3 className="text-[24px] font-bold mb-4 font-manrope">{date} {new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            {approvedLeaves[date].map((leave) => (
              <div key={leave.id} className="bg-highpurple rounded-lg px-3 py-2 mb-4 flex justify-between items-center w-full">
                <div>
                  <p className="text-lg font-medium font-manrope">{leave.employeeName}</p>
                  <p className="text-gray-500 font-manrope">{leave.post}</p>
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
        <Leave leave={selectedLeave} onClose={() => setSelectedLeave(null)} isApproved={true} />
      )}
    </div>
  );
};

export default ApprovedLeave;
