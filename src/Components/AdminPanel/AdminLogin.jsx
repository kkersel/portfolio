import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.scss';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка пароля (в реальном приложении пароль должен быть захеширован и храниться в безопасном месте)
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin');
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