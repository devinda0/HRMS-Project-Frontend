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
import Privacy from '../Components/Privacy/Privacy';
import Terms from '../Components/Terms/Terms'
import Problem from '../Components/ReportProblem/ReportProblem'
import Profile from '../pages/profile/Profile';
import useWaitingSpinner from '../hooks/useWaitingSpinner';


const AppRoutes = () => {
    const {accessToken} = useAuth();
    const refreshToken = useRefreshToken();
    const {removeWaiter} = useWaitingSpinner();


    useEffect(() => {
        refreshToken();
    }, [refreshToken]);

    useEffect(() => {
        removeWaiter('initial loading')
    }, [removeWaiter]);

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
                    <Route path="pim-module" >
                        <Route path="" element={<PIM />} />
                        <Route path='employee'>
                            <Route path='' element={<Employees />} />
                            <Route path=':id' element={<EmployeeDetails />} />
                            <Route path='add' element={<AddNewEmployee />} />
                        </Route>
                    </Route>
                    <Route path="/absent-management" element={<AbsentManagement />} />
                    <Route path="/privacy" element={<Privacy/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/problem" element={<Problem/>}/>
                    <Route path='/reports' >
                        <Route path="" element={<Reports />} />
                        <Route path="employee" element={<EmployeeReport />} />
                        <Route path="leave" element={<LeaveReport />} />
                    </Route>
                    <Route path='profile' element={<Profile />} />
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