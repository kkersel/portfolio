import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaUser, FaClock, FaChartLine, FaEye } from 'react-icons/fa';
import styles from './AdminPanel.module.scss';

const StatsOverview = ({ supabase }) => {
  const [stats, setStats] = useState({
    totalSessions: 0,
    uniqueUsers: 0,
    averageDuration: 0,
    sessionsPerDay: [],
    averageDurationPerDay: [],
    todaySessions: 0,
    bounceRate: 0
  });

  useEffect(() => {

    const fetchStats = async () => {
      // Получаем сессии за последнюю неделю
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const { data: sessions, error } = await supabase
        .from('user_sessions')
        .select('*')
        .gte('created_at', oneWeekAgo.toISOString());

      if (error) {
        console.error('Ошибка при получении сессий:', error);
        return;
      }

      // Вычисляем статистику
      const totalSessions = sessions.length;
      const uniqueUsers = new Set(sessions.map(session => session.id)).size;
      
      // Calculate today's sessions
      const today = new Date().toDateString();
      const todaySessions = sessions.filter(session => 
        new Date(session.created_at).toDateString() === today
      ).length;

      // Вычисляем среднюю продолжительность сессии
      let totalDuration = 0;
      let validSessions = 0;
      let bouncedSessions = 0; // Sessions with very short duration (< 10 seconds)
      
      sessions.forEach(session => {
        if (session.end_time) {
          const duration = new Date(session.end_time) - new Date(session.start_time);
          totalDuration += duration;
          validSessions++;
          
          if (duration < 10000) { // Less than 10 seconds considered as bounce
            bouncedSessions++;
          }
        } else {
          // If no end_time, consider as ongoing or short session
          bouncedSessions++;
        }
      });
      
      const averageDuration = validSessions > 0 ? totalDuration / validSessions : 0;
      const bounceRate = totalSessions > 0 ? (bouncedSessions / totalSessions) * 100 : 0;

      // Группируем сессии по дням
      const sessionsPerDayMap = {};

      sessions.forEach(session => {
        const date = new Date(session.created_at).toDateString();
        if (!sessionsPerDayMap[date]) {
          sessionsPerDayMap[date] = { date, sessions: 0, duration: 0, count: 0 };
        }
        sessionsPerDayMap[date].sessions++;

        if (session.end_time) {
          const duration = new Date(session.end_time) - new Date(session.start_time);
          sessionsPerDayMap[date].duration += duration;
          sessionsPerDayMap[date].count++;
        }
      });

      // Преобразуем объект в массив и вычисляем среднюю продолжительность по дням
      const sessionsPerDay = Object.values(sessionsPerDayMap).map(day => ({
        date: day.date,
        sessions: day.sessions,
        averageDuration: day.count > 0 ? day.duration / day.count : 0
      }));

      setStats({
        totalSessions,
        uniqueUsers,
        averageDuration,
        sessionsPerDay,
        todaySessions,
        bounceRate,
        averageDurationPerDay: sessionsPerDay.map(day => ({
          date: day.date,
          averageDuration: day.averageDuration
        }))
      });
    };

    fetchStats();
  }, [supabase]);

  return (
    <div className={styles.StatsOverview}>
      <h2>Статистика за неделю</h2>
      <div className={styles.statsSummary}>
        <div className={styles.statCard}>
          <FaChartLine className={styles.statIcon} />
          <h3>Всего сессий</h3>
          <p>{stats.totalSessions}</p>
        </div>
        <div className={styles.statCard}>
          <FaUser className={styles.statIcon} />
          <h3>Уникальных пользователей</h3>
          <p>{stats.uniqueUsers}</p>
        </div>
        <div className={styles.statCard}>
          <FaClock className={styles.statIcon} />
          <h3>Среднее время на сайте</h3>
          <p>{Math.floor(stats.averageDuration / 1000)} сек</p>
        </div>
        <div className={styles.statCard}>
          <FaEye className={styles.statIcon} />
          <h3>Сессий сегодня</h3>
          <p>{stats.todaySessions}</p>
        </div>
      </div>

      <h3>Сессии по дням</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={stats.sessionsPerDay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sessions" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Среднее время на сайте по дням</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={stats.averageDurationPerDay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="averageDuration" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsOverview;