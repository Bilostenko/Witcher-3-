const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Определяем заголовки ответа
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Читаем файл с данными
  const data = fs.readFileSync('./data.json');

  // Парсим JSON
  const parsedData = JSON.parse(data);

  // Отправляем ответ
  res.end(JSON.stringify(parsedData));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
