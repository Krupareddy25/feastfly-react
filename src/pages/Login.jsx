import "./Login.css";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    const success = login(email, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-card">
          <h4 className="text-center mb-5" style={{ fontFamily: "fangsong" }}>
            Welcome Back..!😍
          </h4>
          <div className="mb-4 input-group-custom">
            <input
              type="email"
              placeholder="Email"
              className="underline-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 input-group-custom password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="underline-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i
              className={`bi ${
                showPassword ? "bi-eye-slash" : "bi-eye"
              } toggle-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>
          <button className="w-100 login-btn mt-3" onClick={handleLogin}>
            Login
          </button>
          <p className="text-center mt-4">
            New user?{" "}
            <Link to="/signup" className="signup-link ms-1">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
