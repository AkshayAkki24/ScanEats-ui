export default function Navbar() {
  return (
    <header className="container">
      <nav className="nav">
        <div className="brand">
          <img
            src="https://img.icons8.com/ios-filled/50/22c55e/qr-code.png"
            alt="Scan-Eats"
            width="28"
            height="28"
          />
          <span>Scan-Eats</span>
        </div>
        <div className="links">
          <a href="#restaurants">Restaurants</a>
          <a href="#categories">Categories</a>
          <a href="#how">How it works</a>
          <a href="#help">Help</a>
        </div>
        <button className="btn secondary">Sign in</button>
      </nav>
    </header>
  );
}
