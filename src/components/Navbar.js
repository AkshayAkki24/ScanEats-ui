export default function Navbar() {
    return (
        <header className = "container">
            <nav className = "nav">
                <div className = "brand">
                    <img src = "/qr-icon.png" alt = "Scan-Eats" width = "28" height = "28"/>
                    <span>Scan-Edits</span>
                </div>
                <div className = "links">
                    <a href = "#restraurants">Restraurants</a>
                    <a href = "#categories">Categories</a>
                    <a href = "#how">How it works</a>
                    <a href = "#help">Help</a>
                </div>
                <button className = "btn secondary">Sign in</button>
            </nav>
        </header>
    );
}