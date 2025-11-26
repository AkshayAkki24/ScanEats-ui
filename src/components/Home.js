import React, { useEffect, useState } from "react";
import api from "../api";
import Navbar from "./Navbar";

export default function Home({ onLogout }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const token = localStorage.getItem("scaneats_token");
      const data = await api.get("/api/restaurants", token);
      setList(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load restaurants. Maybe your token expired.");
    } finally { setLoading(false); }
  }

  useEffect(()=>{ load(); }, []);

  return (
    <div className="home-shell">
      <Navbar onLogout={() => { localStorage.removeItem("scaneats_token"); onLogout(); }} />
      <div style={{display:"grid", gap:12}}>
        <div className="card">
          <h3>Popular near you</h3>
        </div>

        {loading ? <div className="card">Loading…</div> : (
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:12}}>
            {list.map(r => (
              <div className="card" key={r.id}>
                <img src={r.image} alt={r.name} style={{width:"100%", height:160, objectFit:"cover", borderRadius:8}} />
                <h4 style={{margin:"8px 0 4px"}}>{r.name}</h4>
                <div className="small">{r.cuisine} · {r.time} min · ₹{r.price}</div>
                <div style={{marginTop:8}}>
                  <button className="btn">Order now</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
