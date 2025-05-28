import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Pages/App/App';
import { AuthProvider } from './components/Contexts/authContext/index'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>  {/* Wrap App component with AuthProvider */}
      <App />
    </AuthProvider>
  </StrictMode>,
);

