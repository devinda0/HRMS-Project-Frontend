import './App.css';
import AuthProvider from './context/AuthContext';
import { ModeProvider } from './context/ModeContext';  
import WaitingProvider from './context/WaitingContext';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import PIMModule from './pages/PIMModule/Pim_module';  
import AbsentManagement from './pages/AbsentManagement/AbsentManagement';  
import Navbar from './Components/Navbar/Navbar'; 
import Reports from './pages/Reports/Reports' 


function Layout() {
   const location = useLocation();
   const hideNavbarOnLogin = location.pathname === '/login';

  return (
    <>
      {!hideNavbarOnLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pim-module" element={<PIMModule />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pim-module" element={<PIMModule />} /> */}
        <Route path="/absent-management" element={<AbsentManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

function App() {

  return (
    <AuthProvider>
      <WaitingProvider>
        <ModeProvider>  
          <AppRoutes />
        </ModeProvider>
      </WaitingProvider>
    </AuthProvider>
  );
}

export default App;
