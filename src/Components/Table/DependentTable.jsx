import React, { useEffect, useState, useContext } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FiSave } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';

const TableRows = ({data, handleEdit, handleDelete}) => {
    const [disabled, setDisabled] = useState(true);
    const [tempData, setTempData] = useState(data);
    const { role } = useContext(AuthContext);

    useEffect(() => {
        if(!!!data) return;
        setTempData(data);
    }, [data]);

    const handleChange = (e) => {
        setTempData({...tempData, [e.target.name]: e.target.value});
    }

    const getBirthday = (date) => {
        const d = new Date(date);
        if(d.toString() === 'Invalid Date') return '';
        return d.toISOString().split('T')[0];
    }

    const handleSave = () => {
        const saveData = {
            ...tempData,
            birthday: getBirthday(tempData.birthday),
        }
        console.log(saveData.name);
        handleEdit(saveData);
        setDisabled(true);
    }



    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[7rem] bg-transparent '
                    name="name" 
                    id="name" 
                    value={tempData.name} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[5rem] bg-transparent '
                    name="birthday" 
                    id="birthday" 
                    value={getBirthday(tempData.birthday)} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[3rem] bg-transparent '
                    name="gender" 
                    id="gender" 
                    value={tempData.gender} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[3rem] bg-transparent '
                    name="relation" 
                    id="relation" 
                    value={tempData.relation} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            {(role === 'Admin' || role === 'Manager'|| role === 'Employee_lvl1') && (
            <>
                <th>
                {disabled ? 
                    <FaRegEdit className='scale-[1.75]' onClick={() => setDisabled(false)} /> : 
                    <FiSave className='scale-[1.75]' onClick={handleSave} />
                }
                </th>
                <th>
                <MdDeleteForever className='scale-[1.75]' onClick={() => handleDelete(data)} />
                </th>
            </>
            )}

        </tr>
    )
}

const DependentTable = ({className, tableData, handleEdit, handleDelete}) => {

  return (
    <div className={`overflow-x-auto bg-purple-200 ${className}`}>
        <table className="table table-zebra table-pin-cols">
            {/* head */}
            <thead>
            <tr className=' bg-highpurplec'>
                <th>Name</th>
                <th>Birthday</th>
                <th>Gender</th>
                <th>Relation</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index) => {
                    return (
                        <TableRows key={index} data={data} handleEdit={handleEdit} handleDelete={handleDelete}/>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default DependentTable