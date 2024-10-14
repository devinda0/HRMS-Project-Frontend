import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PIMModule from '../pages/PIMModule/Pim_module';
import AbsentManagement from '../pages/AbsentManagement/AbsentManagement';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';
<<<<<<< HEAD
<<<<<<< HEAD
import Reports from '../pages/Reports/Reports';
=======
>>>>>>> 6156533 (remove initial waiting spiner loading)
=======
import Reports from '../pages/Reports/Reports';
>>>>>>> 1d721ab (fix merg errors)

const AppRoutes = () => {
    const {accessToken} = useAuth();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        if(!refreshToken) return;

        refreshToken();

    }, [refreshToken]);


  return (
    <BrowserRouter>
        {accessToken && <Navbar />  }
        <Routes>
            <Route path='/login'>
                {
                    accessToken ? <Route path='' element={<Navigate to='/' />} /> :
                    <Route path='' element={<Login />} />
                }
            </Route>

            {
                accessToken ?
                <Route path='/'>
                    <Route path='' element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/pim-module" element={<PIMModule />} />
                    <Route path="/absent-management" element={<AbsentManagement />} />
                    <Route path="/reports" element={<Reports />} />
                </Route>
                :
                <Route path='*' element={<Navigate to='/login' />} />
            }

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes