import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './app.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (userData) => {
    console.log('Login:', userData);
  };

  const handleRegister = (userData) => {
    console.log('Cadastro:', userData);
  };
  

  return (
    <div>
      {currentPage === 'login' ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RegistrationForm onRegister={handleRegister} />
      )}
      <div>
        {currentPage === 'login' ? (
          <span>Já possui conta? </span>
        ) : (
          <span>Não tem uma conta? </span>
        )}
        {currentPage === 'login' ? (
          <a href="#" onClick={() => setCurrentPage('register')} className="custom-link">
            Criar conta
          </a>
        ) : (
          <a href="#" onClick={() => setCurrentPage('login')} className="custom-link">
            Login
          </a>
        )}
      </div>
    </div>
  );
};
export default App;
