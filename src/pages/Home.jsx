import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <div className="container_home">
        <div className="welcome">
          <h1>Welcome to Pets House</h1>
          <Link to="/login">Do you have an account?</Link>
        </div>
        <div className="logo_home">
          <img src="./images/logo.png" alt="PETS HOUSE LOGO" />
        </div>
      </div>

      <div className="image_footer">
        <img src="./images/animales.png" alt="logo" />
      </div>
    </section>
  );
};

export default Home;
