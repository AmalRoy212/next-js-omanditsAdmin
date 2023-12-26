import mongoose from "mongoose";

async function connectToDB(){
  const conncetions = {};

  try {
    if(conncetions.isConnected) return
    const db = await mongoose.connect(process.env.mongo_connection_string);
    conncetions.isConnected = db.connections[0].readyState;
    console.log("connected");
  } catch (error) {
    throw new Error(error);
  }
}

export default connectToDB;