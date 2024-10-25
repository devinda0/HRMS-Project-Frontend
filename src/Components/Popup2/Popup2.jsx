import { useState } from "react";

function Popup2({ closePopup }) {
  const [isSaved, setIsSaved] = useState(false);
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
    setIsSaved(true);

    
    setTimeout(() => setIsSaved(false), 3000);
   
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
          
          <div className="">
            <div className="fname">
              <label htmlFor="ContactName">Contact Name</label><br />
              <input type="text" id="ContactName" name="ContactName" value={info.ContactName} onChange={handleInputChange} /><br />
            </div>
            
          </div>
  
          <div className="container">
            <div className="Email">
              <label htmlFor="Relationship">Relationship</label><br />
              <input type="text" id="Relationship" name="Relationship" value={info.Relationship} onChange={handleInputChange}/><br />
            </div>
            <div className="contactNumnber1">
              <label htmlFor="ContactNumber">contact number</label><br />
              <input type="text" id="ContactNumber" name="ContactNumber" value={info.ContactNumber} onChange={handleInputChange}/>
            </div>
            
          </div>
          <div className="Button">
                <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={closePopup}>Cancel</button>
                <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px] ml-[30px]  w-[100px] cursor-pointer" onClick={handleSave}>Save</button>
              </div>
              {isSaved && (
              <div className="relative">
             
             
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
              
        
         
              
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white text-black px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold">Changes Saved!</p>
                </div>
            
              </div>
            )}

        </div>
      </div>
    );
  }
  
  export default Popup2;