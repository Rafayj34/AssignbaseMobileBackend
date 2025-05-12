const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema({
  jobName: { type: String, required: true },
  jobType: String,
  jobLevel: String,
  wordCount: Number,
  referencingStyle: String,
  otherDetails: Schema.Types.Mixed,
  attachments: [Schema.Types.Mixed],
  jobCost: Number,
  jobPosted: { type: Date, default: Date.now },
  jobAssigned: Date,
  jobReviewed: Date,
  jobCompleted: Date,
  jobStatus: [Schema.Types.Mixed],
  dueDate: { type: Date, required: true },
  paymentDetails: Schema.Types.Mixed,
  jobField: String,
  jobSubject: String,
  salesId: { type: Schema.Types.ObjectId, ref: "Sales" },
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  pmId: { type: Schema.Types.ObjectId, ref: "ProjectManager" },
  writerId: { type: Schema.Types.ObjectId, ref: "Writer" },
  invoiceId: { type: Schema.Types.ObjectId, ref: "Invoice" },
  writerJobs: [{ type: Schema.Types.ObjectId, ref: "WriterJobs" }]
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
