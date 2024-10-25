import { BiAddToQueue } from "react-icons/bi";
import { FiEdit } from "react-icons/fi"

import React from 'react';

import { useState,useContext } from "react";

import Popups from "../Popups/Popups";

function Dependent_info({edit}){
   
    
    const [showPopup, setShowPopup] = useState(false);
    
    const closePopup = () => {
        setShowPopup(false);
    };
    const dependants=[
        {
            name:"Dhruva Doe",
            relation:"son"
        },
        {
          name:"Samua Doe",
          relation:"son"
        },
        {
            name:"Samua Doe",
            relation:"son"
        }
    ]
    
    
    return (
        <>
        <div class="table-container">
        <h1 className="h2 font-manrope font-bold mt-2 text-2xl mb-3 ml-0">Dependant Information</h1>    
        <table>
            <thead>
                <tr className="headers">
                    <th>Dependent's Name</th>
                    <th>Relation to Employee</th>
                {(edit===true)&&(    
                    <th>
                        <button  type="button" class="add-btn" onClick={()=>setShowPopup(true)}>
                            < BiAddToQueue className="icon1"/>
                        </button>
                    </th>
                  )}      
                </tr>
              
            </thead>
            <tbody  className="raws">
                {dependants.map(dependant=>(
                    <tr>
                    <td>{dependant.name}</td>
                    <td>{dependant.relation}</td>
                    {(edit===true)&&( 
                    <td>
                        
                    <button type="button" class="edit-btn" onClick={()=>setShowPopup(true)}>
                            < FiEdit className="icon"/>
                        </button>
                    
                    </td>
                    )}

                </tr>

                ))}
                
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