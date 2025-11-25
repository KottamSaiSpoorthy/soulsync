import {Link} from 'react-router-dom'
import profile from './profile.jpg'
function Nav(){
<<<<<<< HEAD
    function display(){
        console.log("ewwww..........");
    }
    return(
    <div className="nav">
        <div className="image"><button onClick={display} className="imgbtn"><img src={profile} className="img"/></button></div>
=======
    return(
    <div className="nav">
        <div className="image"> <img src={profile}/> </div>
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
        <Link to="/section" className="navlink">New Chat</Link>
        <Link to="/" className="navlink">Log Out</Link>
    </div>
    )
}
export default Nav