import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PIMModule from './pages/PIMModule/Pim_module';  // Import PIM Module page
import AbsentManagement from './pages/AbsentManagement/Ab_manage';  // Import Absent Management page
import Navbar from './Components/Navbar/Navbar';  // Import Navbar
import { ModeProvider } from './context/ModeContext';  // Import ModeContext

function App() {
  return (
    <ModeProvider>  {/* Wrap the app in ModeProvider */}
      <BrowserRouter>
        <Navbar />  {/* Navbar is always visible */}
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
