import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ users }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) alert("Login successful! Welcome " + user.name);
    else alert("Invalid credentials");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1>STUDY & SUCCEED</h1>
        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="login-btn" onClick={handleLogin}>LOGIN</button>
        <p
  className="login-link"
  onClick={() => navigate("/forgot")}
>
  Forgot Password?
</p>

        <p className="login-link" onClick={()=>navigate("/register")}>Create Account</p>
      </div>
    </div>
  );
};

export default Login;