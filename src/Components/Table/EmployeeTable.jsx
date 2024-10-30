import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EmployeeTable = ({className, tableData, startIndex = 1}) => {
    const [tableHeaders, setTableHeaders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!!!tableData || !!!tableData[0]) return;
        setTableHeaders(Object.keys(tableData[0]));
    }, [tableData]);

  return (
    <div className={`overflow-x-auto bg-purple-200 ${className}`}>
        <table className="table table-zebra">
            {/* head */}
            <thead>
            <tr className=' bg-highpurplec'>
                <th></th>
                {
                    tableHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))
                }
            </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index) => {
                    return (
                        <tr className=' hover:scale-[1.01] cursor-pointer' key={index} onClick={(e) => navigate(`${data.employee_id}`)}>
                            <th>{index + startIndex}</th>
                            {
                                tableHeaders.map((header, index) => (
                                    <td key={index}>{data[header]}</td>
                                ))
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeTable