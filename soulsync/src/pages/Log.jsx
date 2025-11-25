import {useState} from "react"
import {useNavigate} from 'react-router-dom'
<<<<<<< HEAD
import ssi from "./soulsync.png"
=======
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
function Log(){
    const nav = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
<<<<<<< HEAD

    const check = async () => {
    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: name,
            password: password
        })
    });

    const suc = await res.json();

    if (suc.success) {
        nav("/section");
        return;
    } 
    if (suc.message.toLowerCase()==="user not found") {
        alert("Please Sign up");
        nav("/signin");
        return;
    }

    // Wrong password
    if (suc.message.toLowerCase()==="wrong password") {
        alert("Wrong password");
        return;
    }

    console.log(suc);
};


    return(    
        <div className="ss">
            <img src={ssi} width="200px" height="200px" className="ssi"/>
                <form className="form">
                    <h2>LOGIN:</h2>
                    <label className="label">Enter UserName:</label>
                    <input className="in" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <label className="label">Enter Password:</label>
                    <input className="in" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button type="button" className="fbtn" onClick={check}>login</button>
                </form>
=======
    const save=async ()=>{
        const data={
            username:name,
            password:password
        }
        await fetch("http://localhost:3000/savecre", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
         });
        
         nav("/section");
}
    return(    
        <div>
            <Header />
            <div className="Ff">
                    <form className="form">
                        <label className="label">Enter UserName:</label>
                        <input className="in" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        <label className="label">Enter Password:</label>
                        <input className="in" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        <button type="button" className="fbtn" onClick={save}>login</button>
                    </form>
                </div>
            <Footer />
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
        </div>
    )
}
export default Log;