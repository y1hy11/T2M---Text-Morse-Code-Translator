import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css';
import NavbarLogo from '../assets/Navbar_logo.svg';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="navbar-logo">
            <Link to="/">
                <img src={NavbarLogo} alt="website logo" />
            </Link>
        </div>
        <nav>
              <ul className="nav-links">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/convert">Translate</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
              </ul>
        </nav>
    </header>
  );
};

export default Navbar;