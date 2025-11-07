const items = [
  {
    name: "Pizza",
    img: "https://th.bing.com/th/id/R.a138e6c293fe233a25751b844b4e63dc?rik=etE6w%2ffHYSd%2fjA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f05%2fPizza-Free-PNG-Image.png&ehk=aKvuuG62ZwLy65RuLJDcA4NhGCPJOmvMDib4E%2fSJGys%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Burgers",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Biryani",
    img: "https://cdn.siasat.com/wp-content/uploads/2020/02/Biryani-1.jpg",
  },
  {
    name: "Sushi",
    img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=600&q=60",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="container">
      <h2 style={{ margin: "6px 0 12px" }}>Browse by category</h2>
      <div className="grid grid-4">
        {items.map((c) => (
          <div key={c.name} className="card category">
            <img src={c.img} alt={c.name} />
            <div>
              <div style={{ fontWeight: 700 }}>{c.name}</div>
              <div className="muted">24+ options</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
