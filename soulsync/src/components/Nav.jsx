import {Link} from 'react-router-dom'
import profile from './profile.jpg'
function Nav(){
    function display(){
        console.log("ewwww..........");
    }
    return(
    <div className="nav">
        <div className="image"><button onClick={display} className="imgbtn"><img src={profile} className="img"/></button></div>
        <Link to="/section" className="navlink">New Chat</Link>
        <Link to="/" className="navlink">Log Out</Link>
    </div>
    )
}
export default Nav