import mongoose from 'mongoose';

// Define the schema for a job application
const jobApplicationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  jobRole: {
    type: String,
    required: true,
    trim: true,
  },
  applicationLink: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now, // Set default to current time
  },
  applicationStatus: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected', 'Accepted'],
    default: 'Applied', // Default value for application status
    required: true,
  }
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Create the model
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;
