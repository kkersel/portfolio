-- Добавляем столбцы для хранения информации о пользователе
ALTER TABLE user_sessions
ADD COLUMN IF NOT EXISTS ip_address TEXT,
ADD COLUMN IF NOT EXISTS user_agent TEXT,
ADD COLUMN IF NOT EXISTS start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
ADD COLUMN IF NOT EXISTS end_time TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS duration INTERVAL;

-- Включаем Realtime для таблицы (если еще не включено)
ALTER PUBLICATION supabase_realtime ADD TABLE user_sessions;