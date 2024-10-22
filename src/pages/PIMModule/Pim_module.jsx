import { useState } from "react";
import { createContext } from "react";
import Personalinfo from "../../Components/Personalinfo/Personalinfo";
import '../../Components/PIMcss/PIM.css'

export const userContext=createContext();

function PIM(){
    const role="HR";
    return(
    <userContext.Provider value={role} >
     <div>
     <Personalinfo/>
    </div>
   </userContext.Provider> 
    );

 }    
export default PIM;