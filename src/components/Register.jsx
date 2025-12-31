import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // Fake register success
    alert("OTP sent to your email");
    navigate("/otp"); // Go to OTP page
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">

        {/* LEFT SIDE */}
        <div className="register-left">
          <h1>Create Account</h1>
          <p>Start your learning journey with us</p>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="register-btn" onClick={handleRegister}>
            CREATE ACCOUNT
          </button>

          <div
            className="register-link"
            onClick={() => navigate("/")}
          >
            Already have an account? Login
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="register-right">
          <h2>Join Our Community</h2>

          <img
            src="https://i.imgur.com/4ZQZ6bC.png"
            alt="Register Illustration"
            className="register-illustration"
          />

          <div className="register-features">
            <div>📘<br />Learn</div>
            <div>🚀<br />Grow</div>
            <div>💡<br />Innovate</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
