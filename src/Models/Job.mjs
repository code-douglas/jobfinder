import { Sequelize } from 'sequelize';
import db from '../db/connection.mjs';

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
  },
  new_job: {
    type: Sequelize.INTEGER,
  },
});

export default Job;
