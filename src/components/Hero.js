import { useState } from "react";

export default function Hero({ onSearch }) {
    const [q, setQ] = useState("");

    function submit(e){
        e.preventDefault();
        onSearch?.(q);
    }

    return (
        <section className = "container hero">
            <div>
                <h1 className = "title">Delivering your favorites, faster.</h1>
                <p className = "subtitle">
                    Scan a menu QR or search nearby Restraurants. Track orders in real-time.
                </p>
                <form className = "searchRow" onSubmit = {submit}>
                    <input className = "input" placeholder = "Search dishes or restraurents....." value = {q} onChange = {(e) => setQ(e.target.value)} aria-label = "Search dishes or restraurents"/>
                    <button className = "btn" type = "submit">Find food</button>
                </form>
                <div className = "pills" style = {{ marginTop : 12}}>
                    <span>Popular:</span>
                    <span className = "pill">Pizza</span>
                    <span className = "pill">Burgers</span>
                    <span className = "pill">Biryani</span>
                    <span className = "pill">Sushi</span>
                </div>
            </div>
            <div className = "card" style = {{overflow : "hiddeb"}}>
                <img src = "/image/hero.jpg" alt = "Delicious meals" style = {{width : "100%", height : "100%", objectFit : "cover"}} />
            </div>
        </section>
    );
}