const http = require('http');

const requestListener = (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

// Use process.on('uncaughtException') and process.on('unhandledRejection') to handle global exceptions.
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
// Add cleanup logic if necessary to release resources when the server shuts down.