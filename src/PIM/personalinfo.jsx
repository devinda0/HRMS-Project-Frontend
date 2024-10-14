import { useState,useContext } from "react";
import Job_role_info from "./jobroleinfo";
import Dependent_info from "./Dependentinfo";
import { userContext } from "./PIM_view";
import Emergency_contact_info from "./Emergencycontact_info";
function Personalinfo(){
    const role=useContext(userContext);
    const [edit,setedit]=useState(false);
    const [visible,setvisible]=useState(true);
    
    return(
      <form>
        <section className="page">
          <h1>Employee information</h1>
          <div className="body_container">
          <div className="container">
            <div className="fname">
            <label for="firstName">First Name</label><br/>
            <input type="text" id="firstName" name="firstName"  placeholder="xxxxxx" readOnly={!edit}/><br/>
            </div>
            <div className="lname">
            <label for="lastName">Last Name</label><br/>
            <input type="text" id="lastName" name="lastName" placeholder="xxxxxx" readOnly={!edit}/>
            </div>
          </div>
          
          <div className="container">
            <div className="Gender">
            <label for="Gender">Gender</label><br/>
            <input type="text" id="Gender" name="Gender" placeholder="xxxxxx" readOnly={!edit}/><br/>
            </div>
            <div className="Birthday">
            <label for="Birthday">Birth Day</label><br/>
            <input type="date" id="lastName" name="lastName" placeholder="xxxxxx" readOnly={!edit}/>
 
            </div>
            <div className="Martial_Status">
            <label for="Martial Status">Martial Status</label><br/>
            <input type="text" id="Martial Status" name="Martial Status" placeholder="xxxxxx" readOnly={!edit}/>
 
            </div>
            
 
          </div>
          <div className="container">
            <div className="Email">
            <label for="Email">Email</label><br/>
            <input type="text" id="Email" name="Email" placeholder="xxxxxx" readOnly={!edit}/><br/>
            </div>
            <div className="contactNumnber1">
            <label for="contactNumnber1">Contact Number1</label><br/>
            <input type="text" id="contactNumnber1" name="contactNumnber1" placeholder="xxxxxx" readOnly={!edit}/>
 
            </div>
            <div className="contactNumnber2">
            <label for="contactNumnber1">Contact Number2</label><br/>
            <input type="text" id="contact Numnber1" name="contactNumnber1" placeholder="xxxxxx" readOnly={!edit}/>
 
            </div>
            
 
          </div>
          <div className="container">
            
 
            <div className="Address">
            <label for="Adress">Adress</label><br/>
            <input type="text" id="Address" name="Address" placeholder="xxxxxx" readOnly={!edit}/><br/>
            </div>
           
          </div>
          
        {(edit===false) &&(
           <>
           <hr/>
           <Job_role_info edit={edit} />
           
          
           <hr/>
           <Dependent_info edit={edit}/>
           <hr/>
           <Emergency_contact_info edit={edit}/>
           </>
           

        )}  
         
         
        {(role !="employee"  && edit==true)&&(  
            <>
            <hr/>
            <Job_role_info edit={edit}/>
            </>
        )}  
        {(edit==true)&&(
          <> 
            <hr/>
            <Dependent_info edit={edit}/>
            <hr/>
            <Emergency_contact_info edit={edit}/>
          </>
        )}  
          
        
          {role === "employee"  && visible==true && (
                      <button className="Editbutton" onClick={() => {setedit(true);setvisible(false)}}>
                                      Edit 
          </button>
          )} 
          {visible==false &&(
            <div className="Button">
              <button className="button2" onClick={() =>{setedit(false); setvisible(true) }}>Cancel</button>
              <button className="button1" onClick={() => alert('Save successful!')}>Save</button>
            </div>
          )}
          {role=="HR" && visible==true && (
        <div className="Button">
          <button className="button2" onClick={() =>{BackButton}}>Back</button>
          <button className="button1" onClick={()=>{setedit(true);setvisible(false)}}>Edit</button>
        </div>
    )} 
            
      </div>
      
     
      </section>
      </form>
      );
      

}
export default Personalinfo