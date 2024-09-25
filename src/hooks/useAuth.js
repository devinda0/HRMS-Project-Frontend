import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const {accessToken, setAccessToken, role, setRole} = useContext(AuthContext);
  return {accessToken, setAccessToken, role, setRole};
}

export default useAuth;