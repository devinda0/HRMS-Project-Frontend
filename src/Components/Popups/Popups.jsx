import { useState } from "react";

function Popups({ closePopup }) {
  const [isSaved, setIsSaved] = useState(false);
  const handleSave = (e) => {
    
    e.preventDefault(); 
    console.log("Data to be sent to the backend:",datainfo);

    
    fetch('/api/savePersonalInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datainfo),
      
    })
    .then(response => response.json())
    
    .catch(error => {
      console.error('Error:', error);
    });
    setIsSaved(true);

    
    setTimeout(() => setIsSaved(false), 3000);
   
  };
  const [datainfo,setdata]=useState({
            firstName:"",
            lastName:"",
            Relation:"",
            Birthday:"",
            Gender:""
})
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setdata({
    ...datainfo,
    [name]: value,
  });
};

  

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        
        <div className="container">
          <div className="Email">
            <label htmlFor="firstName">First Name</label><br />
            <input type="text" id="firstName" name="firstName" value={datainfo.firstname} onChange={handleInputChange} /><br />
          </div>
          <div className="contactNumnber1">
            <label htmlFor="lastName">Last Name</label><br />
            <input type="text" id="lastName" name="lastName"  value={datainfo.lastname} onChange={handleInputChange}/>
          </div>
        </div>

        <div className="container">
          <div className="Gender">
            <label htmlFor="Gender">Gender</label><br />
            <input type="text" id="Gender" name="Gender" value={datainfo.Gender} onChange={handleInputChange}/><br />
          </div>
          <div className="Birthday">
            <label htmlFor="Birthday">Birth Day</label><br />
            <input type="date" id="Birthday" name="Birthday" value={datainfo.Birthday} onChange={handleInputChange}/>
          </div>
          <div className="Martial_Status">
            <label htmlFor="Relation">Realtion</label><br />
            <input type="text" id="Realtion" name="Relation" value={datainfo.Relation} onChange={handleInputChange}/>
          </div>
        </div>
        <div className="Button">
              <button className="button2 border border-[#ef120e] rounded p-[7px] text-[#ef120e] flex justify-center mb-[10px]   w-[100px] cursor-pointer" onClick={closePopup}>Cancel</button>
              <button className="button1 border border-[#a860eb] rounded p-[7px] text-[#a860eb] flex justify-center mb-[10px]   w-[100px] cursor-pointer" onClick={ handleSave}>Save</button>
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

export default Popups;