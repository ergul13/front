// src/Login.js
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Giriş işlemi burada doğrulanabilir
    console.log('Ad:', firstName, 'Soyad:', lastName, 'Şifre:', password);
    onLogin(); // Başarılı giriş sonrası isLoggedIn state'ini true yapar
  };

  const handleForgotPassword = () => {
    console.log('Şifremi Unuttum tıklandı');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Giriş Yap</h2>
        <label>
          Ad:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Soyad:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Giriş Yap</button>
        <button type="button" onClick={handleForgotPassword} style={{ marginTop: '10px', backgroundColor: 'transparent', border: 'none', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
          Şifremi Unuttum
        </button>
      </form>
    </div>
  );
}

export default Login;
