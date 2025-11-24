import mongoose from 'mongoose';
const infoschema = new mongoose.Schema({
    username:String,
    password:String
});
export default mongoose.model("info",infoschema);