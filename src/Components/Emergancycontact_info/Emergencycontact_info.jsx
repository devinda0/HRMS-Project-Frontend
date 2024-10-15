import { BiAddToQueue } from "react-icons/bi";
import { FiEdit } from "react-icons/fi"
import { useState } from "react";
import Popup2 from "../Popups/Popup2";
function Emergency_contact_info({edit}){
    const [showPopup, setShowPopup] = useState(false);
    const closePopup = () => {
        setShowPopup(false);
    }
    const Emergency_info=[
        {
            number:"+94716843128",
            realtion:"son"
        },
        {
            number:"+9471536447",
            realtion:"spouse"
        },
        {
            number:"+9471536447",
            realtion:"spouse"
        },
        

    ]
 return (
    <>
    <div class="table-container">
    <h1 className="h2">Emergency Contact Information</h1>    
    <table>
        <thead>
            <tr className="headers">
                <th>Emergency Contact Number</th>
                <th>Relation to Employee</th>
                {(edit==true)&&( 
                <th>
                    <button type="button" class="add-btn" onClick={()=>setShowPopup(true)}>
                        < BiAddToQueue className="icon1"/>
                    </button>
                </th>
                )}
            </tr>
        </thead>
        <tbody  className="raws">
            {Emergency_info.map(item=>(
                <tr>
                <td>{item.number}</td>
                <td>{item.realtion}</td>
                {(edit==true)&&( 
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
          <Popup2 closePopup={closePopup} /> {/* Popup with a close function */}
        </div>
     )}
      
    </>
    );
 }   
 export default Emergency_contact_info