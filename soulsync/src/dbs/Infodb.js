import mongoose from 'mongoose';
const infoschema = new mongoose.Schema({
    email:String,
    FirstName:String,
    LastName:String,
    DOB:String,
    username:String,
    password:String
});
export default mongoose.model("info",infoschema);