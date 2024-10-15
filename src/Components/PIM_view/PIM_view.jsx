 import { useState } from "react";
 import { createContext } from "react";
 import Personalinfo from "../personalinfo/personalinfo";
 export const userContext=createContext();
 import '../PIMCSS/PIM.css'
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