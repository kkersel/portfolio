CREATE TABLE IF NOT EXISTS user_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Включаем Realtime для таблицы
ALTER PUBLICATION supabase_realtime ADD TABLE user_sessions;