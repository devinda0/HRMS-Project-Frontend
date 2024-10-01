import React from 'react';

const LeaveBalance = () => {
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
            <td className="border px-4 py-5 font-lexend font-medium">16/20</td>
            <td className="border px-4 py-5 font-lexend font-medium">20/20</td>
            <td className="border px-4 py-5 font-lexend font-medium">As deemed suitable.</td>
            <td className="border px-4 py-5 font-lexend font-medium">50/50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveBalance;
