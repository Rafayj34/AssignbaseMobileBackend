const mongoose = require("mongoose");
const { Schema } = mongoose;

const invoiceSchema = new Schema({
  jobId: { type: Schema.Types.ObjectId, ref: "Job", unique: true, required: true },
  currency: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  advanceAmount: { type: Number, required: true },
  remainingAmount: { type: Number, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true },
  invoices: [Schema.Types.Mixed],
  studentId: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  salesId: { type: Schema.Types.ObjectId, ref: "Sales", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Invoice", invoiceSchema);
