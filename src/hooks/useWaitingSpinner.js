import { useContext } from "react";
import { WaitingContext } from '../context/WaitingContext';


const useWaitingSpinner = () => {
    const setWaitingSpinner = useContext(WaitingContext);
    return setWaitingSpinner;
}

export default useWaitingSpinner;