import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FlashFlow</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
