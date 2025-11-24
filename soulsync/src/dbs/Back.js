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
    const { username, password } = req.body;
        const user = new info({
            username: username,
            password: password
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
});