import { Link } from "react-router-dom";
import "./Header.css";
import devar3 from "../assets/images/devar3.jpg";

export default function Header() {
  return (
    <header className="header">
      <img src={devar3} alt="Village Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        {/* <Link to="/contact-us">Contact Us</Link> */}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Link to="/login" className="login-button">Login</Link>
    </header>
  );
}
