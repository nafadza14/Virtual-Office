// Vercel Serverless Function entry point
const server = require('../server/server.js');

module.exports = (req, res) => {
  // Normalize req.url when invoked via Vercel rewrites or direct serverless invocation
  const target = req.headers['x-matched-path'] || req.headers['x-real-url'] || req.headers['x-forwarded-uri'] || req.url;
  if (target && (target.startsWith('/api/') || target === '/api')) {
    req.url = target;
  }
  server.emit('request', req, res);
};
