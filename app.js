const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const path = require('path');
const partner = require('./model/Partner');
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
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
  res.sendFile(path.join(__dirname, '/front/', 'index.html'));
});
app.get('/donate', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/', 'donate.html'));
});
app.get('/partner', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/', 'partner.html'));
});
app.use(express.static('front'));
module.exports = app;
