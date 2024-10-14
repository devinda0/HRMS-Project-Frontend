import './App.css';
import AuthProvider from './context/AuthContext';
import { ModeProvider } from './context/ModeContext';  
import WaitingProvider from './context/WaitingContext';
import AppRoutes from './routes/AppRoutes';

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
      <WaitingProvider>
        <ModeProvider>  
          <AppRoutes />
        </ModeProvider>
      </WaitingProvider>
    </AuthProvider>
  );
}

export default App;
