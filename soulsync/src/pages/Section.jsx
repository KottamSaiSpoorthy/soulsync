<<<<<<< HEAD
import { useState } from "react"
=======
import { useState,useEffect } from "react"
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
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
<<<<<<< HEAD
                        <textarea id="input" placeholder="hi, do you want to talk...."  value={input} onChange={(e)=> setInput(e.target.value)} />
                        <button id="btn" className="btn" onClick={handleSend}>SEND</button>
=======
                        <textarea 
                        id="input" 
                        placeholder="hi, do you want to talk...."  
                        value={input} 
                        onChange={(e)=> setInput(e.target.value)} 
                        />
                        <button id="btn" className="btn" onClick={handleSend}>
                            SEND
                        </button>
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Section;