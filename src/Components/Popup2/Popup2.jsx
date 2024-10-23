import { useState } from "react";

function Popup2({ closePopup }) {
  const handleSave = (e) => {
    
    e.preventDefault(); 
    console.log("Data to be sent to the backend:",info);

    
    fetch('/api/savePersonalInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
      
    })
    .then(response => response.json())
    
    .catch(error => {
      console.error('Error:', error);
    });
   
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setinfo({
      ...info,
      [name]: value,
    });
  };
  const [info,setinfo]=useState({
    ContactName:"",
    Relationship:"",
    ContactNumber:""
,
  })
    return (
      <div className="popup-overlay ">
        <div className="popup-container w-full">
          
          <div className="container">
            <div className="fname">
              <label htmlFor="ContactName">Contact Name</label><br />
              <input type="text" id="ContactName" name="ContactName" value={info.ContactName} onChange={handleInputChange} /><br />
            </div>
            
          </div>
  
          <div className="container">
            <div className="Gender">
              <label htmlFor="Relationship">Relationship</label><br />
              <input type="text" id="Relationship" name="Relationship" value={info.Relationship} onChange={handleInputChange}/><br />
            </div>
            <div className="Birthday">
              <label htmlFor="ContactNumber">contact number</label><br />
              <input type="date" id="ContactNumber" name="ContactNumber" value={info.ContactNumber} onChange={handleInputChange}/>
            </div>
            
          </div>
          <div className="Button">
                <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={closePopup}>Cancel</button>
                <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={handleSave}>Save</button>
              </div>
  
        </div>
      </div>
    );
  }
  
  export default Popup2;