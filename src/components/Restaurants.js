import RestraurantCard from "./RestaurantCard";;

import data from "../data/restraurants";

export default function Restraurants ({filter}){
    const list = data.filter(d => 
        !filter ? true : (d.name.toLowerCase().includes(filter) || d.cuisine.toLowerCase().includes(filter))
    );

    return (
        <section id = "restraurants" className = "container">
            <h2 style = {{margin : "6px 0 12px"}}>Popular near you</h2>
            <div className = "grid grid-3">
                {list.map((r) => <RestraurantCard key = {r.id} item = {r}/>)}
            </div>
        </section>
    );
}