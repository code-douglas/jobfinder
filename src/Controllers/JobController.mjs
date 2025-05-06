import Job from '../Models/Job.mjs';

export default class JobController {
  static async createAJob(req, res) {
    const {
      title,
      description,
      salary,
      company,
      email,
      new_job } = req.body;

    try {
      await Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job,
      });

      return res.redirect('/');
    } catch (error) {
      return res.status(400).send('Erro ao criar vaga.');
    }
  }
}
