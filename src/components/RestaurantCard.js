export default function RestraurantCard({item}) {
    return (
        <article className = "card resto">
            <img src = {item.image} alt = {item.name}/>
            <div className = "body">
                <div style = {{display : "flex",justifyContent : "space-between",alignItems : "center"}}>
                    <h3 style = {{margin : 0,fontSize : 18}}>{item.name}</h3>
                    <span className = "badge">⭐ {item.rating}</span>
                </div>
                <div className = "muted"> {item.cuisine} . {item.time} min · ₹{item.price} for two</div>
                <div style = {{display : "flex",gap:10,marginTop:8}}>
                    <button className = "btn">Order now</button>
                    <button className = "btn secondary">View Menu</button>
                </div>
            </div>
        </article>
    );
}