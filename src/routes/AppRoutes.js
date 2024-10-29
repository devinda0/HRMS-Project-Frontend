import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import AbsentManagement from '../pages/AbsentManagement/AbsentManagement';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';
import Reports from '../pages/Reports/Reports';
import EmployeeReport from '../pages/Reports/EmployeeReport';
import LeaveReport from '../pages/Reports/LeaveReport';
import PIM from '../pages/pim/PIM';
import EmployeeDetails from '../pages/pim/EmployeeDetails';
import AddNewEmployee from '../pages/pim/AddNewEmployee';
import Footer from '../Components/Footer/Footer';
import Employees from '../pages/pim/Employees';

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
                    <Route path="/pim-module" element={<PIM />} />
                    <Route path="/pim-module/employee/add" element={<AddNewEmployee />} />
                    <Route path="/pim-module/employee" element={<Employees />} />
                    <Route path='/pim-module/employee/:id' element={<EmployeeDetails />} />
                    <Route path="/absent-management" element={<AbsentManagement />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/reports/employee" element={<EmployeeReport />} />
                    <Route path="/reports/leave" element={<LeaveReport />} />
                </Route>
                :
                <Route path='*' element={<Navigate to='/login' />} />
            }

        </Routes>
            {
                accessToken && <Footer />
            }
        
    </BrowserRouter>
  )
}

export default AppRoutes