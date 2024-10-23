import { useState } from 'react';
import Personalinfo from './personalinfo/personalinfo.jsx';

function HRview() {
  const Finance = [
    {
      name: "diadhiada",
      jobtitle: "HR",
      paygrade: "level02"
    },
    {
      name: "fsffs",
      jobtitle: "Employee",
      paygrade: "level01"
    },
    {
      name: "sfhgdf",
      jobtitle: "QE",
      paygrade: "level04"
    },
    {
      name: "DSFFDSFS",
      jobtitle: "Manager",
      paygrade: "level05"
    }
  ];

  const IT = [
    {
      name: "diadhiada",
      jobtitle: "HR",
      paygrade: "level02"
    },
    {
      name: "fsffs",
      jobtitle: "Employee",
      paygrade: "level01"
    },
    {
      name: "sfhgdf",
      jobtitle: "QE",
      paygrade: "level04"
    },
    {
      name: "DSFFDSFS",
      jobtitle: "Manager",
      paygrade: "level05"
    }
  ];

  const departments = [
    {
      name: "Finance Department",
      data: Finance
    },
    {
      name: "IT Department",
      data: IT
    }
  ];

  const [selectedRow, setSelectedRow] = useState(null); // State to hold selected employee
  const handleRowClick = (employee) => {
    setSelectedRow(employee); // Set the selected employee when a row is clicked
    console.log("Selected Employee:", employee);
  };

  return (
    <>
      {/* If no employee is selected, show the table */}
      {!selectedRow ? (
        departments.map((department, deptIndex) => (
          <div className="table-container" key={deptIndex}>
            <h1 className="h2">{department.name}</h1>
            <table>
              <thead>
                <tr className="headers">
                  <th>Employee Name</th>
                  <th>Job Title</th>
                  <th>Paygrade</th>
                </tr>
              </thead>
              <tbody className="raws">
                {department.data.map((employee, empIndex) => (
                  <tr
                    key={empIndex}
                    onClick={() => handleRowClick(employee)}
                    style={{
                      cursor: 'pointer',
                      backgroundColor: selectedRow === employee ? '#e0e0e0' : 'white'
                    }}
                  >
                    <td>{employee.name}</td>
                    <td>{employee.jobtitle}</td>
                    <td>{employee.paygrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        // If an employee is selected, show only the Personalinfo component
        <Personalinfo employee={selectedRow} /> // Pass the selected employee as a prop
      )}
    </>
  );
}

export default HRview;
