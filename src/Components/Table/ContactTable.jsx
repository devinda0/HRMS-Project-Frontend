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

    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[7rem] bg-transparent '
                    name="contact_name" 
                    id="contact_name" 
                    value={tempData.contact_name} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[3rem] bg-transparent '
                    name="contact_no" 
                    id="contact_no" 
                    value={tempData.contact_no} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            <td>
                <input 
                    type="text" 
                    className='w-full min-w-[3rem] bg-transparent '
                    name="relationship" 
                    id="relationship" 
                    value={tempData.relationship} 
                    onChange={handleChange} 
                    disabled={disabled} 
                />
            </td>
            {(role === 'Admin' || role === 'Manager'|| role === 'Employee_lvl1') && (
            <>
                <th>
                    {
                        disabled ? 
                        <FaRegEdit className=' scale-[1.75]' onClick={() => setDisabled(false)} /> : 
                        <FiSave className=' scale-[1.75]' onClick={() => {
                            handleEdit(data, tempData);
                            setDisabled(true);
                        }} /> 
                    }
                </th>
                <th>
                    <MdDeleteForever className=' scale-[1.75]' onClick={() => handleDelete(data)} />
                </th>
            </>
            )}
        </tr>
    )
}

const ContactTable = ({className, tableData, handleEdit, handleDelete}) => {

  return (
    <div className={`overflow-x-auto bg-purple-200 ${className}`}>
        <table className="table table-zebra table-pin-cols">
            {/* head */}
            <thead>
            <tr className=' bg-highpurplec'>
                <th>Name</th>
                <th>Contact No</th>
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

export default ContactTable