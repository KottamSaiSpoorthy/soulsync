import { useState } from "react"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Nav from "../components/Nav.jsx"
function Section(){
    const [input,setInput]=useState("");
    const [msg,setMsg] = useState([]);

    function addmessege(x){
        setMsg(c => [...c, x]);
    }

    async function save(x) {
        const data = {
            messege: x,
            reply: "yes"
        };
        await fetch("http://localhost:3000/savemsg",{
            method:"post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    }

    function handleSend() {
        const x = input;
        addmessege(x);
        save(x);
        setInput("");
    }

    return(
        <div className="ram">
            <div className="nav">
                <Nav />
            </div>

            <div>
                <Header />

                <div id="section" className="section">
                    <div className="box">
                        {msg.map((m,i)=>(<p key={i} className="messege">{m}</p>))}
                    </div>

                    <div className="chat">
                        <textarea id="input" placeholder="hi, do you want to talk...."  value={input} onChange={(e)=> setInput(e.target.value)} />
                        <button id="btn" className="btn" onClick={handleSend}>SEND</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Section;