import { useState } from 'react';
import Personalinfo from '../Personalinfo/Personalinfo.jsx';

function HRview() {
  const employees = [
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
    },
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
    },
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
    },
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
    },
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
    },
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
    },
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

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const employeesPerPage = 10; 
  const totalPages = Math.ceil(employees.length / employeesPerPage); 

 
  const currentEmployees = employees.slice(
    currentPage * employeesPerPage,
    currentPage * employeesPerPage + employeesPerPage
  );

  
  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
    setShowPersonalInfo(true);
  };

  
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setSelectedEmployee(null); 
  };
  const handleAddNewEmployee = () => {
    const newEmployee = { name: "", jobtitle: "", paygrade: "" }; 
    setSelectedEmployee(newEmployee); 
    setShowPersonalInfo(true);
  };
  const handleBackClick = () => {
    setShowPersonalInfo(false); 
  };

  return (
   
    < >
      
      {showPersonalInfo  ? (
        <Personalinfo employee={selectedEmployee} OnBack={handleBackClick}  />
      ) : (
        <div className="table-container1">
          <div class="header-container">
          <h1 className="font-manrope font-bold  text-2xlc ml-0">Employee List</h1>
          
          <button onClick={handleAddNewEmployee}  className="add-employee-btn">
          
            Add New Employee
          </button>
          </div>
          <table className='table1'>
            <thead>
              <tr className='headers'>
                <th>Employee Name</th>
                <th>Job Title</th>
                <th>Paygrade</th>
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(employee)}
                  style={{ cursor: 'pointer' }}
                  className='raws'
                >
                  <td>{employee.name}</td>
                  <td>{employee.jobtitle}</td>
                  <td>{employee.paygrade}</td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button key={index}  className="pagebtn" onClick={() => handlePageClick(index) }>
                Page {index + 1}
              </button>
            ))}
          </div>
         
        </div>
      )}
    </>
  );
}

export default HRview;
