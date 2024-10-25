import { useState } from "react";
import { createContext } from "react";
import Personalinfo from '../../Components/Personalinfo/Personalinfo';
import '../../Components/PIMcss/PIM.css'
import HRview from '../../Components/HRview/HRview.jsx';

export const userContext=createContext();

function PIM(){
    const role="CEO";
    return(
        <userContext.Provider value={role} >
         <div>
         {(role==='HR'||role=='CEO') &&
           <HRview/>
         } 
         {(role !='HR' && role!='CEO' ) &&
          < Personalinfo/>
         }  
         
        </div>
       </userContext.Provider> 
        );
   

 }    
export default PIM;