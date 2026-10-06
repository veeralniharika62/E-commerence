import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Welcome Back 👋</h2>
        <p>Login to your SmartShop account</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="account-text">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

        <Link to="/" className="home-link">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;
