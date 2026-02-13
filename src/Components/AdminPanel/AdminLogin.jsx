import React, { useState } from 'react';
import styles from './AdminLogin.module.scss';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка пароля (в реальном приложении пароль должен быть захеширован и храниться в безопасном месте)
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className={styles.AdminLogin}>
      <form onSubmit={handleSubmit}>
        <h2>Вход в админ-панель</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
          className={styles.PasswordInput}
        />
        <button type="submit" className={styles.LoginButton}>Войти</button>
        {error && <p className={styles.ErrorMessage}>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;