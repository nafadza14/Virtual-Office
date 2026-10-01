// Vercel Serverless Function: /api/agents
const server = require('../server/server.js');

module.exports = (req, res) => {
  req.url = '/api/agents';
  server.emit('request', req, res);
};
