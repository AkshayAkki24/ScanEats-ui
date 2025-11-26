import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <div className="navbar">
      <div style={{display:"flex", gap:12, alignItems:"center"}}>
        <img src="https://img.icons8.com/ios-filled/40/22c55e/qr-code.png" alt="logo" style={{width:36}} />
        <strong>Scan-Eats</strong>
      </div>
      <div style={{display:"flex", gap:12}}>
        <button className="btn ghost" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
