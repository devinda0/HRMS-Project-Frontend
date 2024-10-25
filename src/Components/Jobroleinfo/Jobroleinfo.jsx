import { useState } from "react";

function Job_role_info({edit,data,job_role_data}){
   
      
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    job_role_data({
      ...data,
      [name]: value,
    });
  };
    
      
    
        return(
         <>
          <div className="edd">
            
            <div className="container">
               <div className="Employment_Status">
               <label for="Employment Status">Employment Status</label><br/>
               <input type="text" id="Employment_Status" name="Employment_Status" onChange={handleInputChange} value ={data.Employment_Status} readOnly={!edit}/><br/>
               </div>
               <div className="Job_Title">
               <label for="Job Title">Job Title</label><br/>
               <input type="text" id="Job Title" name="Job_Title" onChange={handleInputChange} placeholder={data.Job_Title} readOnly={!edit}/>
 
               </div>
               <div className="Paygrade">
               <label for="Paygrade">Paygrade</label><br/>
               <input type="text" id="Paygrade" name="Paygrade" onChange={handleInputChange} value={data.Paygrade} readOnly={!edit}/>
 
               </div>
               
 
             </div>
             <div className="container">
               <div className="Branch">
               <label for="Branch">Branch</label><br/>
               <input type="text" id="Branch" name="Branch" onChange={handleInputChange} value={data.Department} readOnly={!edit}/><br/>
               </div>
               <div className="Department">
               <label for="Department">Department</label><br/>
               <input type="text" id="Department" name="Department" onChange={handleInputChange} value={data.Branch} readOnly={!edit}/>
               </div>
               <div className="Supervisor">
               <label for="Department">Supervisor</label><br/>
               <input type="text" id="Supervisor" name="Supervisor" onChange={handleInputChange} value={data.supervisor} readOnly={!edit}/>
               </div>
             </div>
         </div>    
             </>
             
     
         );
        
} 
export default Job_role_info