const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Freelance', 'Internship'],
    required: true,
  },
  salary: {
    type: Number,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  applications: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      file: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = JobPost = mongoose.model('jobpost', JobPostSchema);
