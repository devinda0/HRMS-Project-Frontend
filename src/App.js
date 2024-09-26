import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PIMModule from './pages/PIMModule/Pim_module';  // Import PIM Module page
import AbsentManagement from './pages/AbsentManagement/Ab_manage';  // Import Absent Management page
import Navbar from './Components/Navbar/Navbar';  // Import Navbar

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar is always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pim-module" element={<PIMModule />} />
        <Route path="/absent-management" element={<AbsentManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
