import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  username : {
    type : String,
    require : true,
    unique : true,
    min : 3,
    max : 20,
  },
  password : {
    type: String,
    require: true,
    min: 3,
    max: 20,
  },
  img : {
    type : String,
  },
  email : {
    type : String,
    require : true,
    unique : true
  }
})

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
export default Admin;