import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = () => {
    console.log('Leave Application Submitted:', {
      leaveType,
      fromDate,
      toDate,
      reason,
      attachments,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="p-6 bg-custompurple border-4 border-darkpurple">
        <h2 className="text-2xl font-bold mb-4 font-lexend">Leave Application</h2>

        <div className="mb-4">
          <label className="block text-textcolor  mb-2 font-manrope font-normal text-lg">Leave Type</label>
          <select
            className="w-full px-3 py-2 border border-bordercolor rounded-md"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="">Choose</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Casual Leave">Casual Leave</option>
          </select>
        </div>

        <div className="mb-4 flex space-x-4">
          <div>
            <label className="block text-textcolor mb-2 font-manrope font-normal text-lg">From Date</label>
            <DatePicker
              className="w-full px-3 py-2 border bg-white border-bordercolor rounded-md"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              disablePast={true}
            />
          </div>
          <div>
            <label className="block text-textcolor font-normal text-lg mb-2 font-manrope">To Date</label>
            <DatePicker
              className="w-full px-3 py-2 border bg-white border-bordercolor rounded-md"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              disablePast={fromDate ? false : true}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-textcolor font-normal text-lg mb-2 font-manrope">Reason</label>
          <textarea
            className="w-full px-3 py-2 border border-bordercolor rounded-md"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-textcolor font-normal text-lg mb-2 font-manrope">Attachments</label>
          <input
            type="file"
            className="w-full px-3 py-2 bg-white border border-bordercolor rounded-md"
            multiple
            onChange={(e) => setAttachments(Array.from(e.target.files))}
          />
        </div>

        <button
          className="bg-[#023F81] w-full mt-4 text-white font-manrope font-normal px-4 py-4 rounded-full hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default LeaveApplication;
