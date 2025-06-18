// server/models/Emergency.js
import mongoose from 'mongoose';

const emergencySchema = new mongoose.Schema({
  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'Acknowledged', 'Resolved'],
    default: 'Pending'
  }
});

export default mongoose.model('Emergency', emergencySchema);
