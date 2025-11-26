import React, { useState, useEffect } from "react";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import OtpVerify from "./components/Auth/OtpVerify";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Home from "./components/Home";

export default function App() {
  const [view, setView] = useState("login"); // "login" | "signup" | "otp" | "forgot" | "home"
  const [otpUser, setOtpUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("scaneats_token");
    if (token) setView("home");
  }, []);

  function handleOtpRequested(username) {
    setOtpUser(username);
    setView("otp");
  }

  function handleLoginSuccess() {
    setOtpUser(null);
    setView("home");
  }

  function handleLogout() {
    localStorage.removeItem("scaneats_token");
    setView("login");
  }

  return (
    <div className="app-shell">
      {view === "home" ? (
        <Home onLogout={handleLogout} />
      ) : (
        <div className="auth-card" role="main">
          <div className="auth-hero">
            <div className="hero-logo">
              <img src="https://img.icons8.com/ios-filled/40/22c55e/qr-code.png" alt="logo" width="40" />
              <div>
                <div style={{fontSize:16, fontWeight:800}}>Scan-Eats</div>
                <div style={{fontSize:12, color:"var(--muted)"}}>Fast delivery with QR-powered menus</div>
              </div>
            </div>

            <h1 className="hero-title">Delicious food — delivered fast</h1>
            <p className="hero-sub">Sign up or login to order from nearby restaurants. We use 2-step verification to keep your account secure.</p>

            <div style={{marginTop:12}}>
              <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80" alt="food" style={{width:"100%", borderRadius:12, maxHeight:260, objectFit:"cover"}} />
            </div>
          </div>

          {/* right column: forms */}
          {view === "signup" && <Signup onSwitch={setView} />}
          {view === "login" && <Login onSwitch={setView} onOtpRequested={handleOtpRequested} />}
          {view === "otp" && <OtpVerify username={otpUser} onSuccess={handleLoginSuccess} onBackToLogin={() => setView("login")} />}
          {view === "forgot" && <ForgotPassword onSwitch={setView} />}
        </div>
      )}
    </div>
  );
}
