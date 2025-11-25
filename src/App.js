import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home"; // your restaurant UI page

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {!loggedIn ? (
        <Login onLogin={setLoggedIn} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
