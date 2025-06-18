// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import emergencyRoutes from './routes/emergency.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/emergency', emergencyRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
