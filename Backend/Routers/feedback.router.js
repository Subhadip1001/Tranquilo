import express from 'express';
import { createFeedback } from '../Controllers/feedback.controller.js';

const router = express.Router();

router.post('/feedback', createFeedback);

export default router;