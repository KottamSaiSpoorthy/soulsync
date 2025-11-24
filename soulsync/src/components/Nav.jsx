import {Link} from 'react-router-dom'
import profile from './profile.jpg'
function Nav(){
    return(
    <div className="nav">
        <div className="image"> <img src={profile}/> </div>
        <Link to="/section" className="navlink">New Chat</Link>
        <Link to="/" className="navlink">Log Out</Link>
    </div>
    )
}
export default Nav