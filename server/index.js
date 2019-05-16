import chalk from 'chalk';
import path from 'path';
import dbConnection from './dbConnection';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
/* Node env */
require('dotenv').config();

// Routers
import userRoute from './routes/user';
import exerciseRoute from './routes/exercise';

const env = process.env.NODE_ENV;
/* Connect to the DataBase */
const db = dbConnection(env, process.env.MONGO_URI);
const inProduction = env === 'production';
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/css', express.static(path.resolve(__dirname, '..', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'views/index.html'));
});

app.use('/api/exercise', userRoute, exerciseRoute);

// Not found middleware
app.use((req, res, next) => {
  return next({ status: 404, message: 'not found' });
});

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || 'Internal Server Error';
  }
  res
    .status(errCode)
    .type('txt')
    .send(errMessage);
});

const port = process.env.PORT || 3033;
app.set('port', port);
if (inProduction) {
  app.listen(port, () =>
    console.log(
      chalk.green('👏 Production Server Running on port: '),
      chalk.bold(port)
    )
  );
} else {
  app.listen(port, 'localhost', () => {
    console.log(chalk.red('\n-----------------------------------------------'));
    console.log(chalk.green('        💻 Development server 🏃 on: '));
    console.log('        ' + chalk.underline.cyan(`http://localhost:${port}`));
    console.log(chalk.red('-----------------------------------------------'));
  });
}
