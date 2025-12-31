import { useNavigate } from "react-router-dom";
import "./Otp.css";

const Otp = () => {
  const navigate = useNavigate();

  const verifyOtp = () => {
    alert("Account verified successfully!");
    navigate("/");
  };

  return (
    <div className="otp-wrapper">
      <div className="otp-card">
        <h1>VERIFY YOUR ACCOUNT</h1>
        <p>
          A One-Time Password has been sent to your email address.
          Please enter it below
        </p>

        <div className="otp-inputs">
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
          <input maxLength="1" />
        </div>

        <button onClick={verifyOtp}>VERIFY</button>

        <div className="otp-links">
          <span>Resend OTP</span>
          <span>Change Email</span>
        </div>
      </div>
    </div>
  );
};

export default Otp;
