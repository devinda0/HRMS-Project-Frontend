import React from 'react';
import useAxios from '../../hooks/useAxios';

const Leave = ({ leave, onClose, isApproved }) => {
  const axios = useAxios();
  
  const handleApprove = () => {
    if (!axios) return;

    axios.put(`/absence/leave/approve/${leave.leave_id}`)
      .then(res => {
        console.log(res.data);
        alert(`Approved leave for ${leave.name}`);
      }).catch(err => {
        console.log(err);
      });
    
    onClose();
  };

  const handleDecline = () => {
    if (!axios) return;

    axios.put(`/absence/leave/decline/${leave.leave_id}`)
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      });
    
    alert(`Declined leave for ${leave.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-10">
      <div className='bg-white flex flex-col items-center justify-center w-1/2 h-screen p-4 relative rounded-xl'>
        <h1 className="text-[24px] font-bold font-manrope mb-4">Leave Details</h1>
        <div className="bg-ash p-6 rounded w-4/5 shadow-lg">

          <div className="flex flex-row mb-4 justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Leave Type</label> 
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">{leave.leave_type} Leave</p>
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Employee ID</label>
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">{leave.employee_id}</p>
          </div>

          <div className="mb-4 flex flex-row justify-between">
            <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">Employee Name</label>
            <p className=" block w-3/4 px-3 py-2 bg-gray-100 rounded-md">{leave.name}</p>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">From Date</label>
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{(new Date(leave.start_date)).toISOString().split('T')[0]}</p>
            </div>
            <div>
              <label className="block mt-1 text-[16px] font-medium font-manrope text-gray-700">To Date</label>
              <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{(new Date(leave.end_date)).toISOString().split('T')[0]}</p>
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
