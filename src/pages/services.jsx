import React from "react";
import "./css/services.css";

const products = [
  {
    title: "CAEPENTER",
    description: "We offer high-quality carpentry services for homes, offices, and commercial spaces. From custom furniture design to repairs and installations, our skilled carpenters ensure precision, durability, and fine finishing in every project.",
    price: "1000/per day",
    img: "https://i.pinimg.com/1200x/90/a0/01/90a001fba5ba4a11044c38827dc9c910.jpg",
  },
  {
    title: "BARBER",
    description: "Professional grooming and haircut service offering modern and classic styles. Clean fades, sharp trims, and beard styling — all done with precision and care.",
    price: "100/per head",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlpGMNJBDuzS7T31Vat645Xy_E_BDn8UcwA&s",
  },
  {
    title: "PLUMBER",
    description: "Expert plumbing services for your home and business — from leak repairs to full pipe installations, done with precision and care.",
    price: "1200/per day",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqo3hOk6Y1hGUdilJCbzqiE5dCUpJN0S4Kw&s",
  },
  {
    title: "Electrician",
    description: "Reliable electrical maintenance, wiring, and installation services ensuring safety and smooth power for your home or workspace.",
    price: "1200/per day",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8TGUF0Jv-QX52s-kpbz4gLJpyRM3qXGL4Q&s",
  },
];

export default function Service() {
  return (
    <div className="app-container">
      {products.map((item, index) => (
        <div className="app-card" key={index}>
          <img alt={item.title} src={item.img} />
          <div className="app-details">
            <h2 className="app-title">{item.title}</h2>
            <p className="app-description">{item.description}</p>
            <ul><li style={{color:"red"}}>Location: ernakulam , kochi, kerala 682 507</li></ul>
            <h1>₹{item.price}</h1>
            <div className="button-group">
              <button className="view-button">View</button>
              {/*<button className="view-button">Cart</button>*/}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
