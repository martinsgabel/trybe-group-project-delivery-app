const express = require('express');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/', (req, res) => res.status(200).json({ message: 'ok' }));
module.exports = app;
