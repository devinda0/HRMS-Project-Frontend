import React, { useEffect } from 'react'
import WaitingSpinner from '../Components/Popup/WaitingSpinner';

export const WaitingContext = React.createContext();

const WaitingProvider = ({children}) => {
    const {Spinner, setWaiting} = WaitingSpinner();

    // useEffect(() => {
    //     setWaiting(true);
    // },[setWaiting]);

  return (
    <WaitingContext.Provider value={setWaiting}>
        {children}
        <Spinner />
    </WaitingContext.Provider>
  )
}

export default WaitingProvider