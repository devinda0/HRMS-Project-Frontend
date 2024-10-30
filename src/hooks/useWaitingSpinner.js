import { useCallback, useContext } from "react";
import { WaitingContext } from '../context/WaitingContext';


const useWaitingSpinner = () => {
    const {waitingList, setWaitingList} = useContext(WaitingContext);

    const addWaiter = useCallback((waiter) => {
        if(waitingList.includes(waiter)) return;
        setWaitingList( pre => [...pre, waiter]);
    },[waitingList,setWaitingList]);

    const removeWaiter = useCallback((waiter) => {
        setWaitingList(pre => (pre.filter(current => current !== waiter)));
    },[setWaitingList])

    return {addWaiter, removeWaiter};
}

export default useWaitingSpinner;