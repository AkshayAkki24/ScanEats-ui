import React, { useEffect, useState } from "react";
import api from "../../api";

export default function OtpVerify({ username, onSuccess, onBackToLogin }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    setSecondsLeft(120);
    const t = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) { clearInterval(t); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [username]);

  async function verify(e){
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.post("/api/auth/verify-otp", { username, otp });
      if (data.valid) {
        const token = data.token;
        localStorage.setItem("scaneats_token", token);
        onSuccess();
      } else {
        alert("Invalid or expired OTP");
      }
    } catch (err) {
      alert("OTP verification failed: " + (err.message || err));
    } finally { setLoading(false); }
  }

  async function resend() {
    if (resendLoading) return;
    setResendLoading(true);
    try {
      // re-trigger /login to resend OTP — backend expects username & channel; here we call /api/auth/login with channel=email by default
      await api.post("/api/auth/login", { username, password: "dummy", channel: "email" });
      // NOTE: real backend should support a dedicated resend endpoint that doesn't require password
      alert("OTP resent (check email or sms). If resend requires password on backend, implement /api/auth/resend endpoint.");
      setSecondsLeft(120);
    } catch (err) {
      alert("Resend failed: " + (err.message || err));
    } finally { setResendLoading(false); }
  }

  return (
    <form className="auth-form" onSubmit={verify}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Enter OTP</h2>
        <div className="auth-switch small">
          <button type="button" className="btn ghost" onClick={() => onBackToLogin()}>Back</button>
        </div>
      </div>

      <p className="sub small">An OTP was sent to the contact you chose for <strong>{username}</strong>. It expires in <strong>{secondsLeft}s</strong>.</p>

      <div className="otp-row">
        <input className="input otp-input" placeholder="Enter 6-digit OTP" value={otp} onChange={(e)=>setOtp(e.target.value)} />
        <button className="btn" type="submit" disabled={loading}>{loading ? "Verifying..." : "Verify"}</button>
      </div>

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8}}>
        <div className="small">Didn't receive OTP?</div>
        <div style={{display:"flex", gap:8}}>
          <button type="button" className="btn ghost" onClick={resend} disabled={resendLoading || secondsLeft>0}>
            {resendLoading ? "Resending..." : (secondsLeft>0 ? `Resend (${secondsLeft}s)` : "Resend")}
          </button>
        </div>
      </div>
    </form>
  );
}
