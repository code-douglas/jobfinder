import './config/configEnv.mjs';
import sequelize from './db/connection.mjs';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

const startApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to the database');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startApp();
