import React, { useContext, useEffect, useState } from 'react';
import { ModeContext } from '../../context/ModeContext';
import LeaveApplication from '../../Components/leaveapplication/LeaveApplication';
import ModeToggleButton from '../../Components/ModeButton/ModeButton'; 
import profile from '../../Components/Assets/pofile.jpg';
import LeaveBalance from '../../Components/LeaveBalance/LeaveBalance';
import PendingRequest from '../../Components/PendingRequest/PendingRequest';
import ApprovedRequests from '../../Components/ApprovedRequests/ApprovedRequests';
import PendingLeave from '../../Components/PendingLeave/PendingLeave';
import ApprovedLeaves from '../../Components/ApprovedLeave/ApprovedLeave';
import Leave from '../Leave/Leave'; 
import useAxios from '../../hooks/useAxios';

const AbsentManagement = () => {
  const { isEmployeeMode } = useContext(ModeContext); 
  const [isLeavePopupOpen, setLeavePopupOpen] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isSupervisor, setIsSupervisor] = useState(false);
  const axios = useAxios();

  const handleViewDetails = (leave) => {
    setSelectedLeave(leave);
    setLeavePopupOpen(true);
  };
  
  const closePopup = () => {
    setLeavePopupOpen(false);
    setSelectedLeave(null);
  };

  useEffect(() => {
    if(!axios) return;

    axios.get('/absence/is_supervisor')
    .then(res => {
      console.log(res.data);
      setIsSupervisor(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  },[axios]);

  return (
    <div className='bg-custompurple flex-1'>
      {isEmployeeMode ? (
        <div className="flex space-x-2">
          <div className="flex-1 pl-20 pt-20 pr-4 bg-custompurple rounded-lg justify-center">
            <div className='flex mb-14'>
              <div className='basis-1/5 items-center ml-2'>
                <img
                  src={profile} // Replace with the actual image URL
                  alt="Profile"
                  className="flex max-w-28 max-h-28 rounded-full border-4 border-purple-200"
                />
              </div>
              <div className='basis-4/5 items-center ml-4 mt-1'>
                <h1 className="text-3xl font-bold mb-3 font-lexend">Emily Anderson</h1>
                {
                  <ModeToggleButton />
                }
              </div>
            </div>
            <div>    
              <LeaveApplication />
            </div>
          </div>
          <div className="flex-1 p-4 bg-custompurple rounded-lg mt-16">
            <LeaveBalance />
            <PendingRequest onViewDetails={handleViewDetails} /> 
            <ApprovedRequests />
          </div>
        </div>
      ) : (
        <div className="flex space-x-2">
          <div className="flex-1 p-20 bg-custompurple rounded-lg justify-center">
            <div className='flex mb-12'>
              <div className='basis-1/5 items-center ml-2'>
                <img
                  src={profile} // Replace with the actual image URL
                  alt="Profile"
                  className="flex max-w-28 max-h-28 rounded-full border-4 border-purple-200"
                />
              </div>
              <div className='basis-4/5 items-center ml-4 mt-1'>
                <h1 className="text-3xl font-bold mb-3 font-lexend">Emily Anderson</h1>
                {
                  isSupervisor && <ModeToggleButton />
                }
              </div>
            </div>
            <div>    
              <PendingLeave onViewDetails={handleViewDetails} /> 
            </div>
          </div>
          <div className="flex-1 p-4 bg-custompurple mt-56 rounded-lg">
            <ApprovedLeaves onViewDetails={handleViewDetails} /> 
          </div>
        </div>
      )}

      
      {isLeavePopupOpen && (
        <Leave
          leave={selectedLeave}
          onClose={closePopup}
          isApproved={selectedLeave.isApproved} 
        />
      )}
    </div>
  );
};

export default AbsentManagement;
