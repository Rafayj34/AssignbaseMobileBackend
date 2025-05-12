const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// models/ProjectManager.js
const projectManagerSchema = new Schema({
    name: String,
    contact: String,
    dateOfBirth: Date,
    expertise: [String],
    jobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    writerJobs: [{ type: Schema.Types.ObjectId, ref: 'WriterJob' }],
  });
  
  module.exports = mongoose.model('ProjectManager', projectManagerSchema);
  