import React, { useState } from "react";
import "./Login.css"; // styling file

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Temporary login check — later link with backend
    if (email === "admin@gmail.com" && pass === "12345") {
      onLogin(true);
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="https://img.icons8.com/ios-filled/100/22c55e/qr-code.png"
          className="login-logo"
          alt="logo"
        />

        <h2>Welcome to Scan-Eats</h2>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <p className="footer-text">
          Don’t have an account? <a href="#">Create one</a>
        </p>
      </div>
    </div>
  );
}
