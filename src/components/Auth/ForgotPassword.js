import React, { useState } from "react";
import api from "../../api";

export default function ForgotPassword({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [stage, setStage] = useState(0); // 0=send,1=verify+reset
  const [newPass, setNewPass] = useState("");

  async function sendOtp(e) {
    e.preventDefault();
    try {
      await api.post("/api/auth/forgot", { email });
      alert("OTP sent to email");
      setStage(1);
    } catch (err) {
      alert("Failed: " + (err.message||err));
    }
  }

  async function reset(e) {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/reset", { email, otp, newPassword: newPass });
      if (res.ok || res) {
        alert("Password has been reset. Please login.");
        onSwitch("login");
      } else {
        alert("Reset failed");
      }
    } catch (err) {
      alert("Reset failed: " + (err.message||err));
    }
  }

  return (
    <form className="auth-form" onSubmit={stage===0?sendOtp:reset}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Forgot password</h2>
        <div className="auth-switch small">
          <button type="button" className="btn ghost" onClick={() => onSwitch("login")}>Back</button>
        </div>
      </div>

      <p className="sub small">Enter your email and we'll send a reset OTP.</p>

      <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

      {stage===1 && <>
        <input className="input" placeholder="OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} />
        <input className="input" placeholder="New password" type="password" value={newPass} onChange={(e)=>setNewPass(e.target.value)} />
      </>}

      <div style={{display:"flex", gap:12, marginTop:8}}>
        <button className="btn" type="submit">{stage===0? "Send OTP" : "Reset password"}</button>
        <button type="button" className="btn ghost" onClick={() => onSwitch("login")}>Cancel</button>
      </div>
    </form>
  );
}
