import { useState, useContext } from "react";
import Job_role_info from "../Jobroleinfo/Jobroleinfo.jsx";
import Dependent_info from "../Dependentinfo/Dependentinfo.jsx";
import { userContext } from "../../pages/PIMModule/Pim_module.jsx";
import Emergency_contact_info from "../Emergancycontact_info/Emergancycontact_info.jsx";
import { useNavigate } from 'react-router-dom';

function Personalinfo() {
  
  const role = useContext(userContext);
  const [edit, setEdit] = useState(false);
  const [visible, setVisible] = useState(true);

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


function Backbutton(){
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1); // Goes to the previous page
  }};

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
  };

  // Back button handler
  

  return (
    <form onSubmit={handleSave}>
      <section className="page">
        <h1 className="font-manrope font-bold ml-52 mt-20 text-2xl">Employee Information</h1>
        <div className="body_container">
          <div className="container">
            <div className="fname">
              <label htmlFor="firstName">First Name</label><br />
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={person.firstname}
                onChange={handleInputChange}
                readOnly={!edit}
              /><br />
            </div>
            <div className="lname">
              <label htmlFor="lastName">Last Name</label><br />
              <input
                type="text"
                id="lastName"
                name="lastname"
                value={person.lastname}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
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
              <label htmlFor="contactNumnber1">Contact Number 1</label><br />
              <input
                type="text"
                id="contactNumnber1"
                name="contactnumber1"
                value={person.contactnumber1}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
            <div className="contactNumnber2">
              <label htmlFor="contactNumnber2">Contact Number 2</label><br />
              <input
                type="text"
                id="contactNumnber2"
                name="contactnumber2"
                value={person.contactnumber2}
                onChange={handleInputChange}
                readOnly={!edit}
              />
            </div>
          </div>

          <div className="container">
            <div className="Address">
              <label htmlFor="Address">Address</label><br />
              <input
                type="text"
                id="Address"
                name="Address"
                value={person.Address}
                onChange={handleInputChange}
                readOnly={!edit}
              /><br />
            </div>
          </div>

          {(edit === false) && (
            <>
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Job_role_info edit={edit} data={jobrole} job_role_data={setdata} />
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
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

          {(edit === true) && (
            <>
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Dependent_info edit={edit} />
              <hr className="border-t-2 border-[#bdc1ca] my-4" />
              <Emergency_contact_info edit={edit} />
            </>
          )}

          {role === "employee" && visible === true && (
            <button
            className="border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[880px] mt-[10px] w-[120px] cursor-pointer"
            onClick={() => {
              setEdit(true);
              setVisible(false); //edit button
            }}
          >
            Edit
          </button>
          )}

          {visible === false && (
            <div className="Button ml-[680px] flex flex-row">
              <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={() => { setEdit(false); setVisible(true) }}>Cancel</button>
              <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer"type="submit" >Save</button>
            </div>
          )}

          {role === "HR" && visible === true && (
            <div className="Button ml-[680px] flex flex-row">
              <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={Backbutton}>Back</button>
              <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={() => { setEdit(true); setVisible(false) }}>Edit</button>
            </div>
          )}
        </div>
      </section>
    </form>
  );
}

export default Personalinfo;