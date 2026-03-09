import "./Signup.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  });
  const handleSubmit = () => {
    if(!form.name || !form.mobile || !form.email || !form.password){
      alert("Please fill all fields");
      return;
    }
    const success = signup(form);
    if(success){
      navigate("/login");
    }
  };
  return (
    <>
    <div className="signup-wrapper">
        <div className="signup-card">
          <h4 className="text-center mb-4" style={{fontFamily:"fangsong"}}>
            Create Account
          </h4>
          <div className="mb-4 input-group-custom">
            <input
              type="text"
              placeholder="Full Name"
              className="underline-input"
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />
          </div>
          <div className="mb-4 input-group-custom">
            <input
              type="tel"
              placeholder="Mobile Number"
              className="underline-input"
              maxLength="10"
              onChange={(e)=>setForm({...form,mobile:e.target.value})}
            />
          </div>
          <div className="mb-4 input-group-custom">
            <input
              type="email"
              placeholder="Email"
              className="underline-input"
              onChange={(e)=>setForm({...form,email:e.target.value})}
            />
          </div>
          <div className="mb-4 input-group-custom password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="underline-input"
              onChange={(e)=>setForm({...form,password:e.target.value})}
            />
            <i
              className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} toggle-icon`}
              onClick={()=>setShowPassword(!showPassword)}
            ></i>
          </div>
          <button
            className="signup-btn mt-3"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="login-link ms-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}