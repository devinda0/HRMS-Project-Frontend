import React from 'react';

const Leave = ({ leave, onClose, isApproved }) => {
  
  const handleApprove = () => {
    
    alert(`Approved leave for ${leave.employeeName}`);
    onClose();
  };

  const handleDecline = () => {
    
    alert(`Declined leave for ${leave.employeeName}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
      <div className='bg-white flex flex-col items-center justify-center w-1/2 h-screen p-4 relative rounded-xl'>
        <h1 className="text-[24px] font-bold font-manrope mb-4">{leave.date} {new Date(leave.date).toLocaleDateString('en-US', { weekday: 'long' })}</h1>
        <div className="bg-ash p-6 rounded w-4/5 shadow-lg">
          <h2 className='text-lg font-normal font-lexend mb-5'>Leave Details</h2>

          <div className="flex flex-row mb-4 justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Leave Type</label> 
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">{leave.type}</p>
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Employee Name</label>
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">{leave.employeeName}</p>
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Job Title</label>
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">Senior Accountant - Level 01</p>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">From Date</label>
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{leave.fromDate}</p>
            </div>
            <div>
              <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">To Date</label>
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{leave.toDate}</p>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Reason</label>
            <p className="mt-1 block w-full px-3 py-6 bg-gray-100 rounded-md">{leave.reason || "No reason provided"}</p>
          </div>

          <div className="mb-4">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Attachments</label>
            <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">📎 {leave.attachments || "No attachments"}</p>
          </div>

          
          {isApproved ? (
            
            <div className="mt-6">
              <button
                onClick={onClose}
                className="bg-gray-500 text-white w-full text-2xl px-4 py-4 rounded-full focus:outline-none"
              >
                Back
              </button>
            </div>
          ) : (
            
            <div className="flex justify-between mt-6">
              <button
                onClick={handleApprove}
                className="bg-green-500 text-white w-5/12 text-2xl px-4 py-4 rounded-full focus:outline-none"
              >
                Approve
              </button>
              <button
                onClick={handleDecline}
                className="bg-red-500 text-white w-5/12 text-2xl px-4 py-2 rounded-full focus:outline-none"
              >
                Decline
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 text-lg"
          >
            &times;
          </button>
        </div>
      </div>    
    </div>
  );
};

export default Leave;
