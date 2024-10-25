import { useState, useContext } from "react";
import Job_role_info from "../Jobroleinfo/Jobroleinfo.jsx";
import Dependent_info from "../Dependentinfo/Dependentinfo.jsx";
import { userContext } from "../../pages/PIMModule/Pim_module.jsx";
import Emergency_contact_info from "../Emergancycontact_info/Emergancycontact_info.jsx";

import { useNavigate } from 'react-router-dom';
import HRview from "../HRview/HRview.jsx";

function Personalinfo({employee,OnBack}) {
  
  const role = useContext(userContext);
  const [edit, setEdit] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  // State for form fields
  const [person, setPerson] = useState({
    firstname: "Dilhara",
    lastname: "Disnayaka",
    gender: "Male",
    Birthday: "2002.12.12",
    email: "dilharadisanayaka999@gamil.com",
    Martialstatus: "Married",
    contactnumber1: "+94716843128",
    contactnumber2: "+94714018657",
    Address: "Aralugaswaththa pannalaweal lunuwaththa"
  });
  const [jobrole,setdata]=useState({
        Paygrade:"erfe",
        Department:"deedfe",
        Branch:"Bandarawela",
        Job_Title:"frrr",
        Employment_Status:"dweeer"
  });




  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  // Handle Save button click
  const handleSave = (e) => {
    e.preventDefault(); 
    console.log("Data to be sent to the backend:",person,jobrole);

    
    fetch('/api/savePersonalInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person), 
      body:JSON.stringify(jobrole),
    })
    .then(response => response.json())
    .then(data => {
      
      setEdit(false);
      setVisible(true);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    setIsSaved(true);

    
    setTimeout(() => setIsSaved(false), 3000);
  };


  

  return (
    <form onSubmit={handleSave}>
      <section className=''>
      <h1 className="font-manrope font-bold  mt-20 text-2xl">Employee Information</h1>
      <div className="body_container">
          
            <div className="fname">
              <label htmlFor="firstName">Name</label><br />
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={person.firstname}
                onChange={handleInputChange}
                readOnly={!edit}
              /><br />
            </div>
            
         

          <div className="container">
            <div className="Gender">
              <label htmlFor="Gender">Gender</label><br />
              <input
                type="text"
                id="Gender"
                name="gender"
                value={person.gender}
                onChange={handleInputChange}
                readOnly={!edit}
              /><br />
            </div>
            <div className="Birthday">
              <label htmlFor="Birthday">Birth Day</label><br />
              <input
                type="date"
                id="Birthday"
                name="Birthday"
                value={person.Birthday}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
            <div className="Martial_Status">
              <label htmlFor="MartialStatus">Martial Status</label><br />
              <input
                type="text"
                id="MartialStatus"
                name="Martialstatus"
                value={person.Martialstatus}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
          </div>

          <div className="container">
            <div className="Email">
              <label htmlFor="Email">Email</label><br />
              <input
                type="text"
                id="Email"
                name="email"
                value={person.email}
                onChange={handleInputChange}
                readOnly={!edit}
              /><br />
            </div>
            <div className="contactNumnber1">
              <label htmlFor="contactNumnber1">Contact Number </label><br />
              <input
                type="text"
                id="contactNumnber1"
                name="contactnumber1"
                value={person.contactnumber1}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
            
          </div>
         
            <div className="Address">
              <label htmlFor="Address">Address</label><br />
              <input
                type="text"
                id="Address"
                name="Address"
                value={person.Address}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
              <br />
            
          

          {(edit === false) && (
            <>
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Job_role_info edit={edit} data={jobrole} job_role_data={setdata} />
              <hr />
              <Dependent_info edit={edit} />
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Emergency_contact_info edit={edit} />
            </>
          )}

          {(role !== "employee" && edit === true) && (
            <>
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Job_role_info edit={edit} data={jobrole} job_role_data={setdata}/>
            </>
          )}
           {role === "employee" && visible === true && (
            <button className="border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[880px] mt-[10px] w-[120px] cursor-pointer" onClick={() => { setEdit(true); setVisible(false) }}>
              Edit
            </button>
          )}

          {visible === false && (
            <div className="Button  flex flex-row">
               <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={() => { setEdit(false); setVisible(true) }}>Cancel</button>
               <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer"type="submit" onClick={handleSave}>Save</button>
            </div>
          )}
           {isSaved && (
              <div className="relative">
             
             
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
              
        
         
              
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold">Changes Saved!</p>
                </div>
            
              </div>
            )}

          {(role==='HR'||role=='CEO') && visible === true && (
            <div className="Button  flex flex-row">
              <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={OnBack}>Back</button>
              <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={() => { setEdit(true); setVisible(false) }}>Edit</button>
            </div>
          )}

          {(edit === true) && (
            <>
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Dependent_info edit={edit} />
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Emergency_contact_info edit={edit} />
            </>
          )}

         
        </div>
      </section>
    </form>
  );
}

export default Personalinfo;
