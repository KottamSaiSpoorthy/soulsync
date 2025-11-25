import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ssi from './ssicon.png';
function Signin(){
    const [email,setEmail] = useState("");
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [dob,setDob] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const nav = useNavigate();
    const save = async (e) => {
    e.preventDefault();
    const data = {
        email:email,
        FirstName: fname,
        LastName: lname,
        DOB: dob,
        username:username,
        password:password
    };
    const res = await fetch("http://localhost:3000/savecre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    const result = await res.json();
    console.log(result);
    nav("/section");
};


    return(
        <div className='signi'>
            <img src={ssi} width='800px' height='500px'/>

            <form className="sign" onSubmit={save}>
                <h1>Sign in:</h1>
                <label>Enter Email:</label>
                <input className="in" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                <label >Enter First Name:</label>
                <input className="in" type="text" value={fname} onChange={(e)=> setFname(e.target.value)}></input>
                <label>Enter Last Name:</label>
                <input className="in" type="text" value={lname} onChange={(e)=> setLname(e.target.value)}></input>
                <label>Enter Date Of Birth:</label>
                <input className="in" type="text" value={dob} onChange={(e)=> setDob(e.target.value)}></input>
                <label>Enter UserName:</label>
                <input className="in" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}></input>
                <label>Set your PassWord:</label>
                <input className="in" type="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <button className="fbtn" type='submit'>Sign in</button>
            </form>
        </div>
    )
}
export default Signin;