import mongoose from 'mongoose'

const DirectDelegatesSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  JobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const DirectDelegate = mongoose.models.Directs || mongoose.model('Directs', DirectDelegatesSchema);

export default DirectDelegate;