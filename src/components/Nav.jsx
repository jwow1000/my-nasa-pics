import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div id='navContainer-Nav'>
      <NavLink className="navLink-nav" to="/">home</NavLink>
      <NavLink className="navLink-nav" to="/images">images</NavLink>
    </div>
  )
}

export default Nav