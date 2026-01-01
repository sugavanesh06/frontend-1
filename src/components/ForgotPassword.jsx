import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("email"); // email | otp
  const [email, setEmail] = useState("");
  const inputs = useRef([]);

  const sendOtp = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert("OTP sent to your email");
    setStep("otp");
  };

  const handleOtpChange = (e, index) => {
    if (e.target.value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const verifyOtp = () => {
    alert("OTP verified successfully");
    navigate("/"); // back to login
  };

  /* ===== EMAIL SCREEN ===== */
  if (step === "email") {
    return (
      <div className="forgot-wrapper">
        <div className="forgot-card">
          <h1>Forgot Password</h1>
          <p>Enter your registered email address</p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={sendOtp}>SEND OTP</button>

          <p className="back" onClick={() => navigate("/")}>
            Back to Login
          </p>
        </div>
      </div>
    );
  }

  /* ===== OTP SCREEN ===== */
  return (
    <div className="forgot-wrapper">
      <div className="forgot-card">
        <h1>Verify OTP</h1>
        <p>Enter the OTP sent to <b>{email}</b></p>

        <div className="otp-inputs">
          {[0, 1, 2, 3].map((_, i) => (
            <input
              key={i}
              maxLength="1"
              ref={(el) => (inputs.current[i] = el)}
              onChange={(e) => handleOtpChange(e, i)}
            />
          ))}
        </div>

        <button onClick={verifyOtp}>VERIFY</button>

        <div className="otp-footer">
          <span onClick={sendOtp}>Resend OTP</span>
          <span onClick={() => setStep("email")}>Change Email</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
