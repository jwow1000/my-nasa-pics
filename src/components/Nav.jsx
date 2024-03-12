import {NavLink} from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <div id='navContainer-Nav'>
      <NavLink className="link-Nav" to="/">home</NavLink>
      <NavLink className="link-Nav" to="/add-image">add image</NavLink>
     
      
    </div>
  )
}

export default Nav