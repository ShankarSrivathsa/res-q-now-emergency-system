// server/controllers/emergencyController.js
import Emergency from '../models/Emergency.js';

export const createEmergency = async (req, res) => {
  try {
    const { location } = req.body;

    const newEmergency = new Emergency({
      location
    });

    const saved = await newEmergency.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort({ timestamp: -1 });
    res.status(200).json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
