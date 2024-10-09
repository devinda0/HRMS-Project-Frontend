import './App.css';
import AuthProvider from './context/AuthContext';
import { ModeProvider } from './context/ModeContext';  
import WaitingProvider from './context/WaitingContext';
import AppRoutes from './routes/AppRoutes';

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
