import React, { useState } from 'react';
import './index.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password, userType });
  };

  return (
    <div className="login-form-container">
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Entrar</button>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
