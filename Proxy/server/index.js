require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('express-http-proxy');

// require('../Student-Feedback/server/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/courses/:courseId', express.static(path.join(__dirname, '/../public')));

app.get('/:courseId/reviews', proxy('http://localhost:3002'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
