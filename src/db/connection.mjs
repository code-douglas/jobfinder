import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: './src/db/app.db'
});

export default sequelize;
