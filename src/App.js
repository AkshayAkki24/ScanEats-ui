import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Restraurants from "./components/Restaurants";

export default function App() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Navbar />
      <Hero onSearch={(q) => setFilter(q.toLowerCase())} />
      <Categories />
      <Restraurants filter={filter} />
      <footer className = "footer container">
        © {new Date().getFullYear()} Scan-Eats — All rights reserved.
      </footer>
    </div>
  );
}