import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
<nav class="navbar">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHH1KE2pXzktFg5U3kHnKpMuI9rBCoHgsMQ&usqp=CAU" alt="logo" />
  <p class="parrafo animated bounceInLeft infinite">Bienvenidos y Bienvenidas!!</p>
  <ul class="nav-links">
    
    <li>
       <Link to="/" > Home </Link>
     </li>
    
    <li>
      <Link to="/mascotas">Mascotas</Link>
      </li>
    <li>
      <Link to="/login">Login</Link>
      </li>
    
    <li>
      <Link to="/register"><i class="fa-solid fa-user sign-in-icon"></i> Register</Link>
      </li>
    
  </ul>
</nav>
    </header>
  );
};

export default Header;

<Link to="/login">Do you have an account?</Link>