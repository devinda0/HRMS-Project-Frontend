import React, { useEffect, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

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

const EmployeeDetailsForm = ({employeeData, editable = false, handleEdit, initialDisabled = true}) => {
    const [tempData, setTempData] = useState({...defaultEmployeeData});
    const [disabled, setDisabled] = useState(initialDisabled);
    const [jobTitles, setJobTitles] = useState([]);
    const [branches, setBranches] = useState([]);
    const [payGrades, setPayGrades] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        let temp = {};
        Object.keys(employeeData).forEach((key) => {
            if(employeeData[key]) {
                temp = {...temp, [key] : employeeData[key]};
            }
        });
        setTempData( pre => ({...pre, ...temp}));
    }, [employeeData]);

    useEffect(() => {
        if(!axios) return;

        axios.get('/pim/branches')
        .then((res) => {
            setBranches(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[axios]);
    
    useEffect(() => {
        if(!axios) return;

        axios.get('/pim/job-titles')
        .then((res) => {
            setJobTitles(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[axios]);

    useEffect(() => {
        if(!axios) return;

        axios.get('/pim/pay-grades')
        .then((res) => {
            setPayGrades(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[axios]);

    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.id] : e.target.value
        })
    }

    const getBirthday = (date) => {
        const d = new Date(date);
        if(d.toString() === 'Invalid Date') return '';
        return d.toISOString().split('T')[0];
    }

    const handleSave = () => {
        const updatedData = {
            employee_id : tempData.employee_id,
            name : tempData.name,
            email : tempData.email,
            address : tempData.address,
            gender : tempData.gender,
            birthday : getBirthday(tempData.birthday),
            phone : tempData.phone,
            marital_status : tempData.marital_status,
            supervisor : tempData.supervisor,
            job_title_id : (jobTitles.filter((jt) => jt.job_title === tempData.job_title))[0]?.job_title_id,
            pay_grade : tempData.pay_grade,
            employment_status : tempData.employment_status,
            branch_id : (branches.filter((branch) => branch.branch_name === tempData.branch_name)[0]?.branch_id)
        }

        if(!updatedData.job_title_id || !updatedData.branch_id) {
            alert('Please fill up all fields');
            return;
        };

        console.log(updatedData);

        if( updatedData.name === '' || updatedData.email === '' || updatedData.gender === '' ||
            updatedData.address === '' || updatedData.birthday === '' || updatedData.marital_status === '' || 
            updatedData.job_title_id === '' || updatedData.pay_grade === '' || updatedData.phone === '' ||
            updatedData.employment_status === '' || updatedData.branch_id === '') {
                alert('Please fill up all fields');
                return;
            }

        handleEdit(updatedData);
        setDisabled(true);
    }

  return (
    <div className=' w-full flex flex-col justify-start items-center gap-5'>
    <form className=' w-full flex flex-row flex-wrap items-center justify-start gap-5' action="">
        {   initialDisabled &&
            <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
                <label htmlFor="employee_id" className=' pl-1'>Employee ID</label>
                <input 
                    type="text" 
                    id='employee_id' 
                    className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                    value={tempData.employee_id}
                    onChange={handleChange}
                    disabled
                />
            </div>
        }
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="name" className=' pl-1'>Name</label>
            <input 
                type="text" 
                id='name' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.name}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="gender" className=' pl-1'>Gender</label>
            <input 
                type="text" 
                id='gender' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.gender}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="birthday" className=' pl-1'>Birthday</label>
            <input 
                type="date" 
                id='birthday' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={getBirthday(tempData.birthday)}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="marital_status" className=' pl-1'>Marital Status</label>
            <input 
                type="text" 
                id='marital_status' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.marital_status}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="email" className=' pl-1'>Email</label>
            <input 
                type="email" 
                id='email' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.email}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="phone" className=' pl-1'>Phone</label>
            <input 
                type="text" 
                id='phone' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.phone}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="address" className=' pl-1'>Address</label>
            <input 
                type="text" 
                id='address' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.address}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="employment_status" className=' pl-1'>Employment Status</label>
            <input 
                type="text" 
                id='employment_status' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.employment_status}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="branch_name" className=' pl-1'>Branch</label>
            <select 
                name="branch_name" 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                id="branch_name" 
                value={tempData.branch_name}
                onChange={handleChange}
                disabled={disabled}
            >
                <option value={''} disabled>Select Branch</option>
                {
                    branches.map((branch, index) => {
                        return <option key={index} value={branch.branch_name}>{branch.branch_name}</option>
                    })
                }
            </select>
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="job_title" className=' pl-1'>Job Title</label>
            <select 
                name="job_title" 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                id="job_title" 
                value={tempData.job_title}
                onChange={handleChange}
                disabled={disabled}
            >
                <option value={''} disabled>Select Job Title</option>
                {
                    jobTitles.map((jt, index) => {
                        return <option key={index} value={jt.job_title}>{jt.job_title}</option>
                    })
                }
            </select>
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="pay_grade" className=' pl-1'>Pay Grade</label>
            <select 
                name="pay_grade" 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                id="pay_grade" 
                value={tempData.pay_grade}
                onChange={handleChange}
                disabled={disabled}
            >
                <option value={''} disabled>Select Pay Grade</option>
                {
                    payGrades.map((pg, index) => {
                        return <option key={index} value={pg.pay_grade}>{pg.pay_grade}</option>
                    })
                }
            </select>
        </div>
        <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
            <label htmlFor="supervisor" className=' pl-1'>Supervisor</label>
            <input 
                type="text" 
                id='supervisor' 
                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                value={tempData.supervisor}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
        {   initialDisabled &&
            <div className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
                <label htmlFor="username" className=' pl-1'>Username</label>
                <input 
                    type="text" 
                    id='username' 
                    className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                    value={tempData.username}
                    onChange={handleChange}
                    disabled
                />
            </div>
        }
    </form>
    {
        editable && (
            <div className=' w-full flex flex-row justify-end gap-5 items-center'>
            {
                disabled ?(
                    <button 
                        className='btn btn-outline border-purple-500 border-2 text-purple-500 font-semibold'
                        onClick={() => setDisabled(false)}
                    >
                        Edit
                    </button>
                ) : (
                    <>
                        <button 
                            className='btn btn-outline border-red-500 border-2 text-red-500 font-semibold'
                            onClick={() => {
                                setDisabled(true);
                                setTempData({...defaultEmployeeData, ...employeeData});
                            }}
                        >
                            Cancel
                        </button>
                        <button 
                            className='btn btn-outline border-purple-500 border-2 text-purple-500 font-semibold'
                            onClick={() => {
                                handleSave();
                            }}
                        >
                            Save
                        </button>
                    </>
                )
            }
            </div>
        )
    }
    
    </div>
  )
}

export default EmployeeDetailsForm