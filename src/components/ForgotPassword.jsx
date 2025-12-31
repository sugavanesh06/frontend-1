import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="forgot-wrapper">
      <div className="forgot-card">
        <h1>FORGOT PASSWORD</h1>
        <p>
          Enter your registered email address and we’ll send you a password
          reset link
        </p>

        <input placeholder="Email Address" />

        <button onClick={() => alert("Reset link sent!")}>
          SEND RESET LINK
        </button>

        <p className="back" onClick={() => navigate("/")}>
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
