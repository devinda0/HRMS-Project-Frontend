import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import Table from '../../Components/ReportTable/Table';

const EmployeeReport = () => {
    const [filterBy, setFilterBy] = useState('');
    const [filterValue, setFilterValue] = useState({});
    const [currentFilterValue, setCurrentFilterValue] = useState([]);
    const [selectedFilterValue, setSelectedFilterValue] = useState('');
    const [tableData, setTableData] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        if(!axios) return;

        axios.get('/report/filter_by_values')
        .then(res => {
            setFilterValue(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    },[axios]);

    useEffect(() => {
        switch(filterBy) {
            case 'Department':
                setCurrentFilterValue(filterValue.departments);
                break;
            case 'Job Title':
                setCurrentFilterValue(filterValue.jobTitles);
                break;
            case 'Pay Grade':
                setCurrentFilterValue(filterValue.payGrades);
                break;
            case 'Branch':
                setCurrentFilterValue(filterValue.branches);
                break;
            case 'Employment Status':
                setCurrentFilterValue(filterValue.employmentStatuses);
                break;
            default:
                setCurrentFilterValue([]);
        }
    }, [filterBy, filterValue]);

    const getTableData = (filterBy, filterValue) => {
        if(!axios) return;

        axios.get('/report/employees', {
            params: {
                filterBy: filterBy,
                filterValue: filterValue
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

        <form className=' w-full flex flex-row justify-center gap-3 sm:gap-5 flex-wrap my-4' onSubmit={(e) => e.preventDefault()}>
            <select 
                className=' select select-bordered flex-1 min-w-[15rem] lg:max-w-[20rem]' 
                name="filterBy" 
                id="filterBy" 
                value={filterBy} 
                onChange={(e) => {
                    setFilterBy(e.target.value);
                    setSelectedFilterValue('');
                }}
            >
                <option disabled value="">Filter By</option>
                <option value="Department">Department</option>
                <option value="Job Title">Job Title</option>
                <option value="Pay Grade">Pay Grade</option>
                <option value="Branch">Branch</option>
                <option value="Employment Status">Employment Status</option>
            </select>

            <select 
                className=' select select-bordered flex-1 min-w-[15rem] lg:max-w-[20rem]' 
                name="filterValue" 
                id="filterValue"
                value={selectedFilterValue}
                onChange={(e) => {
                    setSelectedFilterValue(e.target.value);
                    getTableData(filterBy, e.target.value);
                }}
            >
                <option disabled value="">Select {filterBy}</option>
                {
                    currentFilterValue.map((value,index) => {
                        return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>
        </form>
        
        {
            tableData.length > 0 && <Table tableData={tableData} />
        }

    </div>
  )
}

export default EmployeeReport