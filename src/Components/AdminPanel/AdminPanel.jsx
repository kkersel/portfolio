import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import StatsOverview from './StatsOverview';
import styles from './AdminPanel.module.scss';

const AdminPanel = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL или ANON_KEY не установлены в .env файле');
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const fetchSessions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('user_sessions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Ошибка при получении сессий:', error);
    } else {
      setSessions(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSessions();

    // Подписка на изменения в таблице user_sessions
    const channel = supabase
      .channel('admin_panel_sessions')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_sessions',
        },
        (payload) => {
          fetchSessions(); // Обновляем данные при изменении
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleRefresh = () => {
    fetchSessions();
  };

  if (loading) {
    return <div className={styles.AdminPanel}>Загрузка...</div>;
  }

  return (
    <div className={styles.AdminPanel}>
      <h1>Админ-панель</h1>
      <StatsOverview />
      <h2>Сессии пользователей</h2>
      <button onClick={handleRefresh} className={styles.RefreshButton}>Обновить</button>
      <table className={styles.SessionsTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата создания</th>
            <th>IP-адрес</th>
            <th>User-Agent</th>
            <th>Время на сайте</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{new Date(session.created_at).toLocaleString()}</td>
              <td>{session.ip_address || 'Неизвестен'}</td> {/* Отображаем 'Неизвестен', если IP-адрес не установлен */}
              <td>{session.user_agent}</td>
              <td>
                {session.end_time
                  ? `${Math.floor((new Date(session.end_time) - new Date(session.start_time)) / 1000)} сек`
                  : 'В процессе'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;