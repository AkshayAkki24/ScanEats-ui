import React, { useState } from "react";
import api from "../../api";

export default function Signup({ onSwitch }) {
  const [form, setForm] = useState({ username: "", password: "", mobile: "", email: "", gender: "", age: "" });
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // backend expects password field name — we pass as 'passwordHash' or change backend accordingly
      const payload = { 
        username: form.username,
        passwordHash: form.password, // backend will hash
        mobile: form.mobile,
        email: form.email,
        gender: form.gender,
        age: Number(form.age || 0)
      };
      await api.post("/api/auth/signup", payload);
      alert("Signup successful — please login");
      onSwitch("login");
    } catch (err) {
      alert("Signup failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="auth-form" onSubmit={submit}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Create account</h2>
        <div className="auth-switch small">
          Already a user? <button type="button" className="btn ghost" onClick={() => onSwitch("login")}>Sign in</button>
        </div>
      </div>

      <p className="sub small">Signup takes 30 seconds. We'll verify your account with an OTP.</p>

      <input className="input" placeholder="Username" value={form.username} onChange={(e)=>setForm({...form, username:e.target.value})} required />
      <input className="input" type="password" placeholder="Password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} required />
      <input className="input" placeholder="Mobile (e.g. +9199...)" value={form.mobile} onChange={(e)=>setForm({...form, mobile:e.target.value})} required />
      <input className="input" type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
      <div style={{display:"flex", gap:10}}>
        <input className="input" placeholder="Gender" value={form.gender} onChange={(e)=>setForm({...form, gender:e.target.value})} />
        <input className="input" placeholder="Age" type="number" value={form.age} onChange={(e)=>setForm({...form, age:e.target.value})} />
      </div>

      <div style={{display:"flex", gap:12, marginTop:10}}>
        <button className="btn" type="submit" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
        <button type="button" className="btn ghost" onClick={() => onSwitch("login")}>Cancel</button>
      </div>
    </form>
  );
}
