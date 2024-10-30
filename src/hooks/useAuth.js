import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const {accessToken, setAccessToken, role} = useContext(AuthContext);

  return {accessToken, setAccessToken, role};
}

export default useAuth;