
import React, { createContext, useState } from 'react';


export const ModeContext = createContext();


export const ModeProvider = ({ children }) => {
  const [isEmployeeMode, setIsEmployeeMode] = useState(true); 

  const toggleMode = () => {
    setIsEmployeeMode((prevMode) => !prevMode); 
  };

  return (
    <ModeContext.Provider value={{ isEmployeeMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
