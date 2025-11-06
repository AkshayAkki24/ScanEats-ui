const items = [
    { name : "Pizza", img:"/images/pizza.jpg"},
    { name : "Burgers", img:"/images/burger.jpg"},
    { name : "Biryani", img:"/images/biryani.jpg"},
    { name : "Sushi", img:"/images/sushi.jpg"},

];

export default function Categories() {
    return (
        <section id = "categories" className = "container">
            <h2 style = {{margin : "6px 0 12px"}}>Browse by category</h2>
            <div className = "grid grid-4">
                {items.map((c) => (
                    <div key = {c.name} className = "card category">
                        <img src = {c.img} alt = {c.name}/>
                        <div>
                            <div style = {{fontweight : 700}}>{c.name}</div>
                            <div className = "muted">24+ options</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}