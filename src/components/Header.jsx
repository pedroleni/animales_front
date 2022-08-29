import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";

const toggleSidenav = () => {
  document.querySelector(".main-menu").classList.toggle("show");
  const line1__bars = document.querySelector(".line1__bars-menu");
  const line2__bars = document.querySelector(".line2__bars-menu");
  const line3__bars = document.querySelector(".line3__bars-menu");


  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

};

const Header = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();
  return (
    <>


      <div className="menu-btn" >
      <div className="bars__menu" onClick={toggleSidenav} >
        <span className="line1__bars-menu"></span>
        <span className="line2__bars-menu"></span>
        <span className="line3__bars-menu"></span>
      </div>
      </div>
      <div className="wrapper">
        <header>
          <nav className="main-nav">
            <div className="container_image_logo_header">
              <div className="logo_nav">
                <img src="./images/logo.png" alt="logo" />
              </div>
              <div className="logo_nav2">
                <img src="./images/cita.png" alt="logo" />
              </div>
            </div>

            <ul className="main-menu">
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

              <div>
                <div className="control">
                  {user ? (
                    <>
                      <p>Welcome {user.name}</p>
                      <div className="container_imagen_logout">
                      {user.avatar !== "undefined" ? (
                        <div><img src={user?.image} alt="User Avatar" /></div>
                        
                      ) : null}

                      <button onClick={() => logout() & navigate("/login")}>
                        Logout
                      </button>

                      </div>
                      
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
              </div>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

<Link to="/login">Do you have an account?</Link>;
