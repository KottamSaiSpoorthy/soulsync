import mongoose from 'mongoose';
const infoschema = new mongoose.Schema({
<<<<<<< HEAD
    email:String,
    FirstName:String,
    LastName:String,
    DOB:String,
=======
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
    username:String,
    password:String
});
export default mongoose.model("info",infoschema);