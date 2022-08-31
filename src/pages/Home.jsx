import "./Home.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";


const Home = () => {
  const { user } = useContext(JwtContext);
  return (
    <section className="home">
      <div className="container_home">
        <div className="welcome">
          <h1>Welcome to Pets House</h1>
          {user ? (
              <>
              <Link to="/login" className="tologin">Visit the pet's world to meet new friends</Link>
                
              </>
            ) : (
              <>
                <Link to="/login" className="tologin">Do you have an account?</Link>
            </>
            )
            
          }
          
        </div>
        <div className="logo_home">
          <img src="./images/logo_white.gif" alt="PETS HOUSE LOGO" />
        </div>
        <div className="logo_home_dark">
          <img src="./images/logo_black.gif" alt="PETS HOUSE LOGO" />
        </div>
      </div>

      <div className="image_footer">
        <img src="/images/animales.png" alt="logo" />
      </div>
      <div className="image_footer_dark">
        <img src="/images/3.png" alt="logo" />
      </div>



    </section>
  );
};

export default Home;
