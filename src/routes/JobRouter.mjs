import express from 'express';
import JobController from '../Controllers/JobController.mjs';
const router = express.Router();

router.post('/create', JobController.createAJob);

export default router;
