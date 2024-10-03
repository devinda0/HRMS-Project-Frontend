
import { useState,useContext } from "react";
import { userContext } from "./PIM_view";
function Job_role_info({edit}){
      const role=useContext(userContext);
      
      
    
        return(
         <>
          <div className="edd">
            
            <div className="container">
               <div className="Employment_Status">
               <label for="Employment Status">Employment Status</label><br/>
               <input type="text" id="Employment Status" name="Employment Status" placeholder ="Employment Status" readOnly={!edit}/><br/>
               </div>
               <div className="Job_Title">
               <label for="Job Title">Job Title</label><br/>
               <input type="text" id="Job Title" name="Job Title" placeholder="xxxxxx" readOnly={!edit}/>
 
               </div>
               <div className="Paygrade">
               <label for="Paygrade">Paygrade</label><br/>
               <input type="text" id="Paygrade" name="Paygrade" placeholder="xxxxxx" readOnly={!edit}/>
 
               </div>
               
 
             </div>
             <div className="container">
               <div className="Branch">
               <label for="Branch">Branch</label><br/>
               <input type="text" id="Branch" name="Branch" placeholder="xxxxxx" readOnly={!edit}/><br/>
               </div>
               <div className="Department">
               <label for="Department">Department</label><br/>
               <input type="text" id="Department" name="Department" placeholder="xxxxxx"readOnly={!edit}/>
               </div>
             </div>
         </div>    
             </>
         );
     
} 
export default Job_role_info