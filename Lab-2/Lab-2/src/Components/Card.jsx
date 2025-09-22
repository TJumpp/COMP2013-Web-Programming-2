export default function Card(listings){
    return <div className="Card-Component" style={{ textAlign: "left"}}>
        <img src={listings.image} alt="" width="180px" />
        <h2 style={{ color: "black"}}>{listings.country}</h2>
        <h3 style={{ color: "#6B6B6A" }}>{listings.name}</h3>

        <p style={{ color: listings.rate >= 4 ? "green" : "red" }}>{listings.rate} ★</p>

        <p style= {{ color: "#6B6B6A"}}>{listings.price}</p>
        
    </div>;
}