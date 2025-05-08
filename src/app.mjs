import './config/configEnv.mjs';
import sequelize from './db/connection.mjs';
import express from 'express';
import jobRoutes from './routes/JobRouter.mjs';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import Job from './Models/Job.mjs';
import JobController from './Controllers/JobController.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './src/views');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/jobs', jobRoutes);

app.get('/', async (req, res) => {
  try {
    const allJobs = await Job.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });
    res.render('home', { allJobs });

  } catch (error) {
    console.log('Erro ao renderizar trabalhos.');
  }
});

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
