import React, { useState} from 'react';
import EmployeeDetailsForm from '../../Components/Form/EmployeeDetailsForm';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';

const defaultEmployeeData = {
    employee_id : '',
    name : '',
    email : '',
    address : '',
    gender : '',
    birthday : '',
    phone : '',
    branch_name : '',
    department_name : '',
    employment_status : '',
    job_title : '',
    marital_status : '',
    pay_grade : '',
    supervisor : '',
    username : ''
}

const AddNewEmployee = () => {
    const [employeeData, setEmployeeData] = useState({...defaultEmployeeData});
    const axios = useAxios();
    const navigate = useNavigate();

    const handleEmployeeDetailsEdit = (formData) => {
        console.log(formData);
        axios.post(`/pim/employees`, formData)
        .then(res => {
            alert('Employee added successfully');
            navigate('/pim-module');
        })
        .catch(err => {
            alert('Error adding employee');
            console.log(err);
        });
    }

  return (
    <div className=' w-full flex-1 flex flex-col gap-3 px-[5rem] py-7'>
        <h1 className=' text-[2rem]'>Employee Information</h1>

        <div className=' w-full flex flex-col border border-black rounded px-4 py-10'>
            <EmployeeDetailsForm  employeeData={employeeData} initialDisabled={false} editable={true} handleEdit={handleEmployeeDetailsEdit}/>
            
        </div>

    </div>
  )
}

export default AddNewEmployee