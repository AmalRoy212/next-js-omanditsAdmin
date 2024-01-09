import mongoose from 'mongoose'

const NominationSchema = new mongoose.Schema({
  refName: {
    type: String,
    required: true,
    min: 3,
    max: 20
  },
  refEmail: {
    type: String,
    required: true,
  },
  erfJobTitle: {
    type: String,
    required: true,
  },
  refCompanyName: {
    type: String,
    required: true,
  },
  refPhone: {
    type: String,
    required : true
  },
  refferedBy : {
    type : String,
    required : true
  },
  refferedEmail : {
    type : String,
    required : true
  }
}, { timestamps: true });

const Nominies = mongoose.models.Nominies || mongoose.model('Nominies', NominationSchema);

export default Nominies;