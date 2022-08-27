import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container_image_logo_header">
          <div className="logo_nav">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="logo_nav2">
            <img src="./images/cita.png" alt="logo" />
          </div>
        </div>
        <ul className="nav-links">
          <li className="button_home">
            <Link to="/"> Home </Link>
          </li>

          <li className="button_mascotas">
            <Link to="/mascotas">Mascotas</Link>
          </li>
          <li className="button_login">
            <Link to="/login">Login</Link>
          </li>

          <li className="button_register">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

<Link to="/login">Do you have an account?</Link>;
