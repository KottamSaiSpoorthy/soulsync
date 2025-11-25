import express from 'express'
import connect from './Datab.js'
import info from './Infodb.js'
import cors from 'cors'
import Chat from './Chatdb.js'

const app = express();
const port = 3000;

connect();

app.use(cors());
app.use(express.json());

app.listen(port, () => { console.log("server connected") });

app.post("/savecre", async (req, res) => {
<<<<<<< HEAD
    const { email,FirstName,LastName,DOB,username, password } = req.body;
        const user = new info({
            email:email,
            FirstName:FirstName,
            LastName:LastName,
            DOB:DOB,
            username: username,
            Password: password
=======
    const { username, password } = req.body;
        const user = new info({
            username: username,
            password: password
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
        });

        await user.save();

        const uu = await info.find();
        res.json(uu);
});

app.post("/savemsg",async (req,res)=>{
    const {messege,reply} = req.body;
    const m = new Chat({
        messege : messege,
        reply: reply
    })
    await m.save();

    const um = await Chat.find();
    res.json(um);
<<<<<<< HEAD
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await info.findOne({ username });

    if (!user) {
        return res.json({ success: false, message:"User not found"});
    }

    if (user.password !== password) {
        return res.json({ success: false, message:"Wrong password"});
    }

    res.json({ success: true });
=======
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
});