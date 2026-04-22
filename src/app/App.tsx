import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { TwoFactorForm } from './components/TwoFactorForm';
import { Dashboard } from './components/Dashboard';
import { WifiLayout } from './components/WifiLayout';

export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'two-factor' | 'dashboard'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tempCredentials, setTempCredentials] = useState<{email?: string, password?: string}>({});

  const handleLogin = async (email: string, password: string) => {
    try {
      setTempCredentials({ email, password });
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setCurrentView('two-factor');
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      setCurrentView('two-factor');
    }
  };

  const handleRegister = async (email: string, password: string) => {
    try {
      setTempCredentials({ email, password });
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setCurrentView('two-factor');
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      setCurrentView('two-factor');
    }
  };

  const handleVerify2FA = async (code: string) => {
    try {
      await fetch('http://localhost:3001/api/2fa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: tempCredentials.email, 
          code 
        }),
      });

      setIsAuthenticated(true);
      setCurrentView('dashboard');
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      setIsAuthenticated(true);
      setCurrentView('dashboard');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
  };

  if (isAuthenticated && currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <WifiLayout>
      {currentView === 'login' && (
        <LoginForm
          onLogin={handleLogin}
          onSwitchToRegister={() => setCurrentView('register')}
        />
      )}
      {currentView === 'register' && (
        <RegisterForm
          onRegister={handleRegister}
          onSwitchToLogin={() => setCurrentView('login')}
        />
      )}
      {currentView === 'two-factor' && (
        <TwoFactorForm
          onVerify={handleVerify2FA}
          onBackToLogin={() => setCurrentView('login')}
        />
      )}
    </WifiLayout>
  );
}