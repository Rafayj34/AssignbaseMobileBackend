const mongoose = require("mongoose");
const { Schema } = mongoose;

const proposalSchema = new Schema({
  writerId: { type: Schema.Types.ObjectId, ref: "Writer", required: true },
  writerName: String,
  jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  approved: { type: Boolean, default: false },
  approvalDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Proposal", proposalSchema);
