import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
const Header = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();
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
          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </>
          ) : null}
        </ul>

        <div className="control">
          {user ? (
            <>
              <p>Welcome {user.username}</p>

              {user.avatar !== "undefined" ? (
                <img src={user?.image} alt="User Avatar" />
              ) : null}

              <button onClick={() => logout() & navigate("/login")}>
                Logout
              </button>
            </>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

<Link to="/login">Do you have an account?</Link>;
