import mongoose from 'mongoose'

const DelegateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required : true
  },
  industry: {
    type: String,
    required : true
  },
  numOfEmployees : {
    type : String,
    required : true
  },
  lookingFor : {
    type : String,
    required : true
  },
  role : {
    type : String,
    required : true
  },
  country : {
    type : String,
    required : true
  },
  type : {
    type : String,
    required : true
  },
  budget : {
    type : String,
    required : true
  },
  timing : {
    type : String,
    required : true
  }
}, { timestamps: true });

const Delegate = mongoose.models.Delegate || mongoose.model('Delegate', DelegateSchema);

export default Delegate;