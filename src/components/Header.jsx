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



const darkmode = () => {
  const btnSwitch = document.querySelector('#switch');
  btnSwitch.classList.toggle('active');
  document.body.classList.toggle('dark');

}


const Header = () => {
  const { user, logout } = useContext(JwtContext);
  let navigate = useNavigate();
  return (
    <>
      <div className="menu-btn">
        <div className="bars__menu" onClick={toggleSidenav}>
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
                <img src="https://i.ibb.co/yXvzJhT/logo.png" alt="logo" />
              </div>
              <div className="logo_nav2">
                <img src="https://i.ibb.co/Y0CB9M9/cita.png" alt="logo" />
              </div>

              {/* -------dark mode ------------*/}
              <button className="switch" id="switch" onClick={darkmode}>
                <span>
                  <i className="fas fa-sun"></i>
                </span>
                <span>
                  <i className="fas fa-moon"></i>
                </span>
              </button>
            </div>

            <ul className="main-menu">
              <li className="button_home" onClick={toggleSidenav}>
                <Link to="/"> Home </Link>
              </li>

              <li className="button_mascotas" onClick={toggleSidenav}>
                <Link to="/mascotas" >Mascotas</Link>
              </li>
              {user ? (
                <>
                  <li onClick={toggleSidenav}>
                    <Link to="/profile" >Profile</Link>
                  </li>
                </>
              ) : null}

              <div>
                <div className="control">
                  {user ? (
                    <>
                      <p className="welcome">Welcome {user.name}</p>
                      <div className="container_imagen_logout">
                        {user.avatar !== "undefined" ? (
                          <div className="image_control">
                            <img className="image_control_image" src={user?.image} alt="User Avatar" />
                          </div>
                        ) : null}

                        <button onClick={() => logout() & navigate("/login")} className="button_logout_control">
                          Logout
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                    <ul>
                      <li onClick={toggleSidenav}>
                        <Link to="/login" >Login</Link>
                      </li>
                      <li onClick={toggleSidenav}>
                        <Link to="/register">Register</Link>
                      </li>
                    </ul>
                    <div className="logo_noUser" >
                    <img src="./images/logo.png" alt="logo" />
                  </div>
                  </>
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
