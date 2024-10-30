import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';

export const Reports = () => {
  return (
    <div className=' w-full flex-1 bg-custompurple px-[10rem] py-7'>
      <h1 className='text-black text-[2.5rem] text-center font-bold p-5'>Generate Reports</h1>
      <div className=' w-full flex flex-col justify-start items-center gap-4 mt-7 '>
        <Link 
          to={'employee'}
          className="w-full bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaFileAlt className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-[2rem] font-bold font-manrope text-black">Employee Overview</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-[1rem]">
              Displays employee details categorized by departments for easy reference and management.
            </p>
          </div>
        </Link>
        <Link 
          to={'leave'}
          className="w-full bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaFileAlt className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-[2rem] font-bold font-manrope text-black">Leave Summary</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-[1rem]">
              Shows total leaves taken within a selected period, grouped by department.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Reports;