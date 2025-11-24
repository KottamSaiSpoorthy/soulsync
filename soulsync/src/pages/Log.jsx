import {useState} from "react"
import {useNavigate} from 'react-router-dom'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
function Log(){
    const nav = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
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
        </div>
    )
}
export default Log;