import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const LeaveBalance = () => {
  const [leaveCount, setLeaveCount] = useState({});
  const [totalLeaveCount, setTotalLeaveCount] = useState({});

  const axios = useAxios();

  useEffect(() => {
    if (!axios) return;

    axios.get('/absence/leave_count')
      .then(res => {
        setLeaveCount(res.data.leaveCount);
        setTotalLeaveCount(res.data.totalLeaveCount);
      }).catch(err => {
        console.log(err);
      });
  }, [axios]);

  return (
    <div className="p-6 bg-[#EDE7F6] rounded-lg shadow-none">
      <h2 className="text-xl font-normal font-lexend mb-8 -ml-9">Leave Balance</h2>
      <table className="min-w-full border-collapse border-custompurple">
        <thead>
          <tr className="bg-lightblue">
            <th className="border px-4 py-6 text-left font-semibold font-lexend text-txtclr1 w-[150px]">Annual</th>
            <th className="border px-4 py-6 text-left font-semibold font-lexend text-txtclr1 w-[150px]">Casual</th>
            <th className="border px-4 py-6 text-left font-semibold font-lexend text-txtclr1 w-[150px]">Maternity</th>
            <th className="border px-4 py-6 text-left font-semibold font-lexend text-txtclr1 w-[150px]">No - Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border px-4 py-5 font-lexend font-medium">
              {`${leaveCount.Annual? totalLeaveCount.Annual - leaveCount.Annual : totalLeaveCount.Annual}/${totalLeaveCount.Annual}`}
            </td>
            <td className="border px-4 py-5 font-lexend font-medium">
              {`${leaveCount.Casual? totalLeaveCount.Casual - leaveCount.Casual : totalLeaveCount.Casual}/${totalLeaveCount.Casual}`}
            </td>
            <td className="border px-4 py-5 font-lexend font-medium">
              {`${leaveCount.Maternity? totalLeaveCount.Maternity - leaveCount.Maternity : totalLeaveCount.Maternity}/${totalLeaveCount.Maternity}`}
            </td>
            <td className="border px-4 py-5 font-lexend font-medium">
              {`${leaveCount['No-pay']? totalLeaveCount['No-pay'] - leaveCount['No-pay'] : totalLeaveCount['No-pay']}/${totalLeaveCount['No-pay']}`}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveBalance;
