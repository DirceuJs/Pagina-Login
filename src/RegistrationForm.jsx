import React, { useState } from 'react';
import './index.css';


const RegistrationForm = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [cpf, setCpf] = useState ('');

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister({ fullName, email, password, userType });
  };

  return (
    <div>
      <div className = "registration-form-container">
      <h2>Cadastro</h2>
      <div> 
  <p>
 Tipo de Usuário:
  <select className="selector">
  <option value="opcao1">Usuário Comum</option>
  <option value="opcao2">Lojista</option>
</select>
  </p>
</div>
      <form onSubmit={handleRegister}>
        <label>
          Nome Completo:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label>
          CPF:
          <input type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCpf (e.target.value)} />
        </label>
        <label>
          E-mail:
          <input type="email" placeholder= "seuemail@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Cadastrar</button>    
      </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
