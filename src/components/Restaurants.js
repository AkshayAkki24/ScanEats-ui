// import RestraurantCard from "./RestaurantCard";;

// import data from "../data/restraurants";

// export default function Restraurants ({filter}){
//     const list = data.filter(d =>
//         !filter ? true : (d.name.toLowerCase().includes(filter) || d.cuisine.toLowerCase().includes(filter))
//     );

//     return (
//         <section id = "restraurants" className = "container">
//             <h2 style = {{margin : "6px 0 12px"}}>Popular near you</h2>
//             <div className = "grid grid-3">
//                 {list.map((r) => <RestraurantCard key = {r.id} item = {r}/>)}
//             </div>
//         </section>
//     );
// }

import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Restaurants({ filter }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/restaurants")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : data.content || [];
        setList(arr);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const filtered = Array.isArray(list)
    ? list.filter((r) =>
        !filter ? true : r.name.toLowerCase().includes(filter)
      )
    : [];

  return (
    <section id="restaurants" className="container">
      <h2 style={{ margin: "6px 0 12px" }}>Popular near you</h2>
      <div className="grid grid-3">
        {filtered.map((r) => (
          <RestaurantCard key={r.id} item={r} />
        ))}
      </div>
    </section>
  );
}
