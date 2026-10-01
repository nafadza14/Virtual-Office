// Vercel Serverless Function: /api/tasks
const server = require('../server/server.js');

module.exports = (req, res) => {
  const original = req.headers['x-matched-path'] || req.headers['x-real-url'] || req.url;
  if (original && original.startsWith('/api/tasks')) {
    req.url = original;
  } else {
    req.url = '/api/tasks' + (req.url && req.url !== '/' ? req.url : '');
  }
  server.emit('request', req, res);
};
