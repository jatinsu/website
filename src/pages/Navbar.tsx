import './Navbar.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='menu'>
        <div className="menu-item">About</div>
        <div className="menu-item">Projects</div>
        <div className="menu-item">Contact</div>
        <div className="menu-item">
          <NavLink to='/resume' className='resume-link'>Resume</NavLink>
        </div>
    </div>
  );
}

export default Navbar;