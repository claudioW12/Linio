const http = require('http');
const port = process.env.PORT || 3000;

const { getNumbersOrMessages } = require("../utils/utils");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end( getNumbersOrMessages(1,100).join(",") );
});

server.listen(port, () => {
  console.log(`Server running in port ${ port }`);
});
