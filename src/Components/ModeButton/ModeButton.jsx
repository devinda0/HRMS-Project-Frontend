import React, { useContext } from 'react';
import { ModeContext } from '../../context/ModeContext'; 

const ModeButton = () => {
  const { isEmployeeMode, toggleMode } = useContext(ModeContext); 

  return (
    <button
      onClick={toggleMode}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Switch to {isEmployeeMode ? 'Supervisor Mode' : 'Employee Mode'}
    </button>
  );
};

export default ModeButton;
