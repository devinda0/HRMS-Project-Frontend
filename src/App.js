import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AuthProvider from './context/AuthContext';
import Login from './pages/login/Login';
import PIMModule from './pages/PIMModule/Pim_module';  
import AbsentManagement from './pages/AbsentManagement/AbsentManagement';  
import Navbar from './Components/Navbar/Navbar';  
import { ModeProvider } from './context/ModeContext';  

function App() {
  return (
    <ModeProvider>  
      <BrowserRouter>
        <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pim-module" element={<PIMModule />} />
          <Route path="/absent-management" element={<AbsentManagement />} />
        </Routes>
      </BrowserRouter>
    </ModeProvider>
  );
}

export default App;
