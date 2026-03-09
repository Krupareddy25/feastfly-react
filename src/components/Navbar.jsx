import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import Logo from "../assets/logoTag.png";
export default function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="navbar-custom">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="FeastFly" className="logo" />
        </Link>
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/menu" onClick={()=>setMenuOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link className="order-btn" to="/menu">Order Now</Link>
          </li>
          <li>
            <Link className="cart-btn" to="/cart">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              {cart.length > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </li>
          <li>
            {!currentUser ? (
              <Link className="login-avatar" to="/login">Login</Link>
            ) : (
              <div className="user-dropdown">
                <div className="login-avatar">{currentUser.name}</div>
                <div className="dropdown-menu-custom">
                  <Link to="/orders" className="dropdown-item-custom">
                    My Orders
                  </Link>
                  <div
                    className="dropdown-item-custom"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}