import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import AuthProvider from './context/AuthContext';
import Login from './pages/login/Login';
import PIMModule from './pages/PIMModule/Pim_module';  
import AbsentManagement from './pages/AbsentManagement/AbsentManagement';  
import Reports from './pages/Reports/Reports'
import Navbar from './Components/Navbar/Navbar';  
import { ModeProvider } from './context/ModeContext';  

function Layout() {
  const location = useLocation();
  const hideNavbarOnLogin = location.pathname === '/login';

  return (
    <>
      {!hideNavbarOnLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pim-module" element={<PIMModule />} />
        <Route path="/absent-management" element={<AbsentManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <ModeProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ModeProvider>
    </AuthProvider>
  );
}

export default App;
