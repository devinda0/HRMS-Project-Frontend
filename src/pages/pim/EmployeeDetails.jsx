import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import EmployeeDetailsForm from '../../Components/Form/EmployeeDetailsForm';
import DependentTable from '../../Components/Table/DependentTable';
import ContactTable from '../../Components/Table/ContactTable';

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

const EmployeeDetails = () => {
    const { id } = useParams();
    const [employeeData, setEmployeeData] = useState({...defaultEmployeeData});
    const [dependantData, setDependantData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        axios.get(`/pim/employees/${id}`)
        .then(res => {
            setEmployeeData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[axios, id]);
    
    useEffect(() => {
        axios.get(`/pim/employees/${id}/dependants`)
        .then(res => {
            setDependantData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[axios, id]);
    
    useEffect(() => {
        axios.get(`/pim/employees/${id}/emergency-contacts`)
        .then(res => {
            setContactData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[axios, id]);

    const handleEmployeeDetailsEdit = (formData) => {
        axios.put(`/pim/employees/`, formData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleDependantEdit = (formData) => {
        axios.put(`/pim/dependants/`, formData)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const handleDependantDelete = (formData) => {
        axios.delete(`/pim/dependants/${formData.dependant_id}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const handleContactEdit = (oldData, newData) => {
        const formData = {oldData, newData};
        axios.put(`/pim/emergency-contacts`, formData)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        console.log(formData);
    }

    const handleContactDelete = (formData) => {
        axios.delete(`/pim/emergency-contacts/${formData.employee_id}/${formData.contact_no}`)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div className=' w-full flex flex-col gap-3 px-[5rem] py-7'>
        <h1 className=' text-[2rem]'>Employee Information</h1>

        <div className=' w-full flex flex-col border border-black rounded px-4 py-10'>
            <EmployeeDetailsForm  employeeData={employeeData} editable={true} handleEdit={handleEmployeeDetailsEdit}/>

            <div className=' divider' />

            <div className=' w-full flex flex-row justify-between items-center mb-2'>
                <h1 className=' text-[1.5rem] my-3'>Dependants</h1>
                <button className=' btn btn-md w-[6rem] sm:w-auto btn-outline'>Add Dependant</button>
            </div>

            <DependentTable tableData={dependantData} handleDelete={handleDependantDelete} handleEdit={handleDependantEdit} />

            <div className=' divider mt-10' />

            <div className=' w-full flex flex-row justify-between items-center mb-2'>
                <h1 className=' text-[1.5rem] my-3'>Contact Information</h1>
                <button className=' btn btn-md w-[6rem] sm:w-auto btn-outline'>Add Contact</button>
            </div>

            <ContactTable tableData={contactData} handleDelete={handleContactDelete} handleEdit={handleContactEdit} />
        </div>

        
    </div>
  )
}

export default EmployeeDetails