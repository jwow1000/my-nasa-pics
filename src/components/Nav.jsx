import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div id='navContainer-Nav'>
      <NavLink className="link-Nav" to="/">home</NavLink>
      <NavLink className="link-Nav" to="/images">images</NavLink>
      <NavLink className="link-Nav" to="/add-images">add images</NavLink>
      
    </div>
  )
}

export default Nav