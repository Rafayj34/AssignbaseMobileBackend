const mongoose = require("mongoose");
const { Schema } = mongoose;

const writerJobsSchema = new Schema({
  writerId: { type: Schema.Types.ObjectId, ref: "Writer" },
  jobName: { type: String, required: true },
  jobType: String,
  jobLevel: String,
  jobSubject: String,
  jobField: String,
  dueDate: { type: Date, required: true },
  jobPosted: { type: Date, default: Date.now },
  otherDetails: Schema.Types.Mixed,
  wordCount: { type: Number, required: true },
  referencingStyle: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
  jobStatus: [Schema.Types.Mixed],
  job: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  attachments: [Schema.Types.Mixed],
  salesId: { type: Schema.Types.ObjectId, ref: "Sales" },
  writerSubmittedAttachments: [Schema.Types.Mixed],
  pmId: { type: Schema.Types.ObjectId, ref: "ProjectManager" },
  pmSubmittedAttachments: [Schema.Types.Mixed],
  finalSubmission: { type: [Schema.Types.Mixed], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("WriterJobs", writerJobsSchema);
