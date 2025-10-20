import { Link, useLocation } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Kaytee.dev</h1>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
