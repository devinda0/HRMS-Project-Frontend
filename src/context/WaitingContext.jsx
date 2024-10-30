import React, { useState, useEffect } from 'react'
import WaitingSpinner from '../Components/Popup/WaitingSpinner';

export const WaitingContext = React.createContext();

const WaitingProvider = ({children}) => {
    const {Spinner, setWaiting} = WaitingSpinner();
    const [waitingList, setWaitingList] = useState(['initial loading']);

    useEffect(() => {
      if(waitingList.length > 0) {
        setWaiting(true);
      } else {
        setWaiting(false);
      }
    },[waitingList, setWaiting]);

  return (
    <WaitingContext.Provider value={{waitingList, setWaitingList}}>
        {children}
        <Spinner />
    </WaitingContext.Provider>
  )
}

export default WaitingProvider