import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import JobApplication from './Model/JobApplication.js';

dotenv.config(); // For loading environment variables from .env file

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Database connection
const mongoURI = process.env.MONGO_URI; // MongoDB URI from environment variables
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// CRUD Routes

// Create a new job application
app.post('/api/job-applications', async (req, res) => {
  try {
    const newApplication = new JobApplication(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all job applications
app.get('/api/job-applications', async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single job application by ID
app.get('/api/job-applications/:id', async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Job application not found' });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a job application by ID
app.put('/api/job-applications/:id', async (req, res) => {
  try {
    const application = await JobApplication.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!application) {
      return res.status(404).json({ message: 'Job application not found' });
    }
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a job application by ID
app.delete('/api/job-applications/:id', async (req, res) => {
  try {
    const application = await JobApplication.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Job application not found' });
    }
    res.status(204).send(); // No content to send back after deletion
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
