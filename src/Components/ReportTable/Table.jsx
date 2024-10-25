import React, { useEffect, useState } from 'react'

const Table = ({className, tableData}) => {
    const [tableHeaders, setTableHeaders] = useState([]);

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
                        <tr key={index}>
                            <th>{index + 1}</th>
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

export default Table