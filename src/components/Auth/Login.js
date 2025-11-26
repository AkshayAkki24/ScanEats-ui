import React, { useState } from "react";
import api from "../../api";

export default function Login({ onSwitch, onOtpRequested }) {
  const [form, setForm] = useState({ username: "", password: "", channel: "email" });
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/api/auth/login", { username: form.username, password: form.password, channel: form.channel });
      // proceed to otp step; parent will show OTP verify with username stored
      onOtpRequested(form.username);
    } catch (err) {
      alert("Login failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Welcome back</h2>
        <div className="auth-switch small">
          New here? <button type="button" className="btn ghost" onClick={() => onSwitch("signup")}>Create account</button>
        </div>
      </div>

      <p className="sub small">Sign in with your username and password, then verify via OTP.</p>

      <input className="input" placeholder="Username" value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} required />
      <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} required />

      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <label className="small" style={{minWidth:80}}>Deliver OTP to:</label>
        <label style={{display:"flex", alignItems:"center", gap:6}}><input type="radio" name="channel" checked={form.channel==="email"} onChange={()=>setForm({...form, channel:"email"})}/> Email</label>
        <label style={{display:"flex", alignItems:"center", gap:6}}><input type="radio" name="channel" checked={form.channel==="sms"} onChange={()=>setForm({...form, channel:"sms"})}/> SMS</label>
      </div>

      <div style={{display:"flex", gap:12, marginTop:10}}>
        <button className="btn" type="submit" disabled={loading}>{loading? "Sending OTP..." : "Sign in"}</button>
        <button type="button" className="btn ghost" onClick={() => onSwitch("forgot")}>Forgot?</button>
      </div>
    </form>
  );
}
