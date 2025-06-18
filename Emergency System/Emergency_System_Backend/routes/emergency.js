// server/routes/emergency.js
import express from 'express';
import { createEmergency, getEmergencies } from '../controllers/emergencyController.js';

const router = express.Router();

// POST /api/emergency/alert
router.post('/alert', createEmergency);

// GET /api/emergency/all
router.get('/all', getEmergencies);

export default router;
