import mongoose from 'mongoose';
import chalk from 'chalk';
mongoose.Promise = global.Promise;
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

async function connectToDB(env, mongoURI) {
  if (env === 'development') {
    mongoose.set('debug', true);
    // connect to a development database
    try {
      const connection = await mongoose.connect(mongoURI, {
        ...options,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        dbName: process.env.DB,
      });
      console.log(chalk.green('\nConnected to the development Database 🏬'));
      console.log(chalk.yellow('Good Luck! 🍌'));
      return connection;
    } catch (error) {
      console.log(chalk.red(error));
      return Promise.reject(new Error('Failed to connect to development DB'));
    }
  } else if (env === 'production') {
    try {
      const connection = await mongoose.connect(mongoURI, {
        ...options,
        autoIndex: false,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        dbName: process.env.DB,
      });
      console.log(chalk.cyan('Connected on production Database 🏬'));
      return connection;
    } catch (error) {
      // should record error in production
      return Promise.reject(new Error('Failed to connect to mongoDB'));
    }
  }
  return false;
}

export default connectToDB;
