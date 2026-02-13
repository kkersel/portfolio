const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let onlineCount = 0;

wss.on('connection', (ws) => {
  onlineCount++;
  console.log(`Количество онлайн: ${onlineCount}`);

  // Отправляем текущее количество онлайн-пользователей новому клиенту
  ws.send(JSON.stringify({ type: 'onlineCount', count: onlineCount }));

  // Рассылаем обновленное количество всем клиентам
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'onlineCount', count: onlineCount }));
    }
  });

  ws.on('close', () => {
    onlineCount--;
    console.log(`Количество онлайн: ${onlineCount}`);

    // Рассылаем обновленное количество всем клиентам
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'onlineCount', count: onlineCount }));
      }
    });
  });
});

console.log('WebSocket-сервер запущен на порту 8080');