import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import Table from '../../Components/Table/EmployeeTable';
import { useNavigate } from 'react-router-dom';

const employeePerPage = 10;

const PIM = () => {
    const [tableData, setTableData] = useState([]);
    const axios = useAxios();
    const [page, setPage] = useState(1);
    const [totalEmployees, setTotalEmployees] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/pim/employees', {
            params : {
                position : (page - 1) * employeePerPage,
                recordCount : employeePerPage
            }
        })
        .then(res => {
            setTableData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [page]);

    useEffect(() => {
        axios.get('/pim/employees/count')
        .then(res => {
            setTotalEmployees(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


  return (
    <div className='w-full flex flex-col justify-start items-center px-[1rem] sm:px-[5rem] my-5'>
        <div className=' w-full my-4 flex flex-row items-center justify-between'>
            <h1 className=' text-[1.7rem] sm:text-[2rem]'>Employees</h1>
            <button className=' btn btn-md w-[6rem] sm:w-auto btn-outline' onClick={()=> navigate('add')}>Add New Employee</button>
        </div>

        <div className=' w-full'>
            {
                tableData.length > 0 && <Table tableData={tableData} startIndex={((page - 1) * employeePerPage ) + 1}/>
            }
        </div>

        <div className='w-full flex flex-row justify-center gap-4 my-4'>
            <button 
                className=' btn btn-outline' 
                onClick={() => {
                    if(page === 1) return;
                    setPage(page - 1);
                }}
            >
                Previous
            </button>
            <button 
                className=' btn btn-outline' 
                onClick={() => {
                    if(page * employeePerPage >= totalEmployees) return;
                    setPage(page + 1);
                }}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default PIM