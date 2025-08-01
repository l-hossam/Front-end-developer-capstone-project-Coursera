import { Link } from "react-router-dom";
import Logo from "../components/assets/logo.jpg";
import "../components/styles/Header.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Use boolean, not string

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const IconComponent = isMenuOpen ? AiOutlineClose : AiOutlineMenu;

  return (
    <header className="header-container">
      <div>
        <Link to="/">
          <img className="Logo-img" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <IconComponent
          size={25}
          style={{
            color: "#333333",
            ...(isMenuOpen
              ? {}
              : {
                  borderLeft: "1px solid #333333",
                  paddingLeft: "10px",
                  height: "20px",
                }),
          }}
        />
      </div>

      {/* Navigation menu */}
      <nav className={isMenuOpen ? "active" : ""}>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/reservations">Reservation</Link>
          </li>
          <li>
            <Link to="/OrderOnline">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
