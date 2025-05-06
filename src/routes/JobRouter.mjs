import express from 'express';
import JobController from '../Controller/JobsController.mjs';
const router = express.Router();

router.post('/create', JobController.createAJob);

export default router;
