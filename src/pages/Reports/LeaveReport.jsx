import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import Table from '../../Components/ReportTable/Table';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const LeaveReport = () => {
    const [filterBy, setFilterBy] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [tableData, setTableData] = useState([]);
    const axios = useAxios();

    const getTableData = (filterBy, fromDate, toDate) => {
        if(!axios) return;

        if(!fromDate || !toDate) return;

        if(filterBy === '') return;

        axios.get('/report/leave_count', {
            params: {
                filterBy: filterBy,
                fromDate : (new Date(fromDate)).toISOString().split('T')[0],
                toDate : (new Date(toDate)).toISOString().split('T')[0]
            }
        })
        .then(res => {
            setTableData(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

  return (
    <div className=' w-full flex-1 bg-custompurple px-[1.5rem] md:px-[2rem] lg:px-[5rem] py-7'>
        <h1 className='text-black text-[2.5rem] text-center'>Employee Report</h1>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form className=' w-full flex flex-col sm:flex-row justify-start items-center gap-3 my-4 ' onSubmit={(e) => e.preventDefault()}>
            <select 
                className=' select select-bordered sm:flex-1 w-full ' 
                name="filterBy" 
                id="filterBy" 
                value={filterBy} 
                onChange={(e) => {
                    setFilterBy(e.target.value);
                    getTableData(e.target.value, fromDate, toDate);
                }}
            >
                <option disabled value="">Filter By</option>
                <option value="Department">Department</option>
                <option value="Job Title">Job Title</option>
                <option value="Pay Grade">Pay Grade</option>
                <option value="Branch">Branch</option>
                <option value="Employment Status">Employment Status</option>
            </select>

            <div className='flex flex-row justify-start items-center gap-3 sm:flex-1 w-full '>
                <label className=' pl-3' htmlFor="toDate">From : </label>
                <DatePicker
                className=" flex-1 px-3 py-2 border bg-white border-bordercolor rounded-md"
                value={fromDate}
                onChange={(newValue) => {
                    setFromDate(newValue);
                    getTableData(filterBy, newValue, toDate);
                }}
                disablePast={false}
                />
            </div>

            <div className='flex flex-row justify-start items-center gap-3 sm:flex-1 w-full '>
                <label className=' pl-3' htmlFor="toDate">To : </label>
                <DatePicker
                className=" flex-1 px-3 py-2 border bg-white border-bordercolor rounded-md"
                value={toDate}
                onChange={(newValue) => {
                    setToDate(newValue);
                    getTableData(filterBy, fromDate, newValue);
                }}
                disablePast={false}
                />
            </div>
        </form>
        </LocalizationProvider>

        {
            tableData.length > 0 && <Table tableData={tableData} />
        }

    </div>
  )
}

export default LeaveReport