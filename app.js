const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/', 'index.html'));
});
app.get('/donate', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/', 'donate.html'));
});
app.get('/partner', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/', 'partner.html'));
});
app.use(express.static('view'));
module.exports = app;
