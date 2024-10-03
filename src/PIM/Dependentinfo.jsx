import { BiAddToQueue } from "react-icons/bi";
import { FiEdit } from "react-icons/fi"

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useContext } from "react";
import { userContext } from "./PIM_view";
import Popups from "./Popups";

function Dependent_info({edit}){
    const [show,setshow]=useState(true)
    const role= useContext(userContext)
    const [showPopup, setShowPopup] = useState(false);
    const BackButton = () => {
        const navigate = useNavigate()
      
        const handleBackClick = () => {
          navigate(-1); // Goes to the previous page
        }
        
        
    }
    const closePopup = () => {
        setShowPopup(false);
    };
    
    
    return (
        <>
        <div class="table-container">
        <h1 className="h2">Dependant Information</h1>    
        <table>
            <thead>
                <tr className="headers">
                    <th>Dependent's Name</th>
                    <th>Relation to Employee</th>
                {(edit==true)&&(    
                    <th>
                        <button  type="button" class="add-btn" onClick={()=>setShowPopup(true)}>
                            < BiAddToQueue className="icon1"/>
                        </button>
                    </th>
                  )}      
                </tr>
              
            </thead>
            <tbody  className="raws">
                <tr>
                    <td>Dhruva Doe</td>
                    <td>Son</td>
                    {(edit==true)&&( 
                    <td>
                        <button type="button" class="edit-btn" onClick={()=>setShowPopup(true)}>
                            < FiEdit className="icon"/>
                        </button>
                        
                    </td>
                    )}
                </tr>
                <tr>
                    <td>Kumar Doe</td>
                    <td>Son</td>
                    {(edit==true)&&( 
                    <td>
                        
                    <button type="button" class="edit-btn" onClick={()=>setShowPopup(true)}>
                            < FiEdit className="icon"/>
                        </button>
                    
                    </td>
                    )}

                </tr>
            </tbody>
        </table>
        
    </div>
   
    {showPopup && (
        <div>
          <Popups closePopup={closePopup} /> {/* Popup with a close function */}
        </div>
     )}
      
        </>
      );
 };
      
export default Dependent_info
