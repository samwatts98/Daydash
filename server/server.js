const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/weather', (req, res) => {
  const REQUEST_URL = `https://www.metaweather.com/api/location/${req.query.woeid || process.env.DEFAULT_WOEID}/`;
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ type: 'error', message: err.message }));
});

app.get('/location', (req, res) => {
  const query = req.query.lattlong ? `lattlong=${req.query.lattlong}` : `query=${req.query.city || process.env.DEFAULT_LOCATION}`;
  const REQUEST_URL = `https://www.metaweather.com/api/location/search/?${query}`;
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ type: 'error', message: err.message }));
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`CORS Server listening on ${PORT}`));
