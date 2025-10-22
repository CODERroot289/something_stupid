import React, { useState,useEffect } from "react";
// import Sale from "./sale.jsx"
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";

export default function Cart({user,userData}) {



  const [vopen, setvopen] = useState(false);
  const [vpopen, setvpopen] = useState(0);







  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      alert("Please enter product name and price");
      return;
    }

    // try {
    //   await addDoc(collection(db, "products"), {
    //     ...product,
    //     price: Number(product.price),
    //     createdAt: new Date(),
    //   });
    //   alert("✅ Product added successfully!");
    //   setProduct({ name: "", price: "", description: "", imageUrl: "" });
    // } catch (err) {
    //   console.error("Error adding product:", err);
    //   alert("❌ Failed to add product");
    // }

    alert("✅ Product added (demo)");
    setProduct({ name: "", price: "", description: "", imageUrl: "" });
    setShowForm(false);
  };

  const styles = {

    container: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    // cardContainer: {
    //   width: "90%",
    //   height: "85%",
    //   background: "white",
    //   borderRadius: "20px",
    //   boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    //   alignItems: "center",
    //   fontSize: "1.5rem",
    //   fontWeight: "600",
    //   display: "flex",
    //   justifyContent: "space-around",
    //   flexWrap: "wrap",
    //   overflowY: "auto",
    // },
    
    
  };



  console.log(userData)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productdb.up.railway.app/products") // server endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);





 function genratecards() {


      let l= products
        .filter(item => userData?.cart?.includes(item.id) )
        .map((item, index) => (
          <>
            {cards(item)}
          </>
        ))
      if (l.length>0){
        return l
      }
      else{

      return <>🛍️ Your Products Area</>
      }


      // }else{


      //      let pl = getRandomItems(products)
      //     console.log(pl)
      //     return pl.map((item, index) => (<>
      //     {cards(item)}

      //       </>))
      // }

    }



  function popupv() {


    let view_div ={}
    if (vopen == true) {
      console.log("dlola")
      let e = document.getElementById("human")
      e.style.display = "flex"
      // let ccontainer =document.createElement("style")
      // ccontainer.style.inner
      // ccontainer.id = "dynamicStyleElement";
      // ccontainer.type = "text/css";
      // ccontainer.innerHTML = "#card-container > div:not(#human) {filter: blur(5px);}"
      let p = null 
      products.map((item, index) => {
        if (item.id == vpopen){
          console.log(item)
          p = item
        }

      })

      document.querySelectorAll("#card-container > div:not(#human)").forEach(div => {
        div.style.filter = "blur(5px)";
      });


      // toggleBlur()
      view_div =(
        <>
          <div className="modal-card" >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <h3 id="modalTitle" style={{ margin: 0, color: "#e6f6ff" }}>
                {p.name}
              </h3>
              <button className="ghost" onClick={() =>{

                document.getElementById("human").style.display = "none"
                setvopen(false)

            }}>
                Close
              </button>
            </div>

            <div className="modal-grid">
              <div className="thumb-lg">
                <img
                  id="modalImg"
                  src={`https://productdb.up.railway.app/${p.images[0]}`}
                  alt=""
                />
              </div>

              <div id="if">
                <div
                  id="modalDesc"
                  style={{ color: "var(--muted)", marginBottom: "12px" }}
                >
                  {p.description}
                </div>

                <div
                  id="modalPrice"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                  }}
                >
                    ₹{new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(p.price)}
                </div>

                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button className="btn" id="modalBuy">
                    Buy Now
                  </button>
                  <button className="add small" id="modalAdd">
                    Add to Cart
                  </button>
                </div>

                <div style={{ marginTop: "18px" }}>
                  <h4 style={{ margin: "0 0 8px 0", color: "#e6f6ff" }}>
                    Details
                  </h4>
                  <ul
                    id="modalSpecs"
                    style={{ color: "var(--muted)", margin: "0 0 12px 18px" }}
                  >
                    <li>Location: {p.location}</li>
                    <li>Phone no: {p.phone}</li>
                    <li>Category: {p.category}</li>
                    {/*<li>Availability: In stock</li>*/}
                  </ul>

                  <div style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    Reviews
                  </div>
                  <div id="modalReviews" style={{ marginTop: "8px", color: "var(--muted)" }}>
                    ★★★★★ • 4.5 (132 reviews)
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
      )


    }
    else{
      view_div = (<></>)

      document.querySelectorAll("#card-container > div:not(#human)").forEach(div => {
        div.style.filter = "none";
      });

    }
  return view_div


} 


function cards(x){
      // console.log(x)
      let appcard =(
        <>
        <div className="app-card">
        <img src={`https://productdb.up.railway.app/${x.images[0]}`} alt="App 1"></img>
        <div className="app-details" onClick={console.log("dsa")}>
          <h2 className="app-title">{x.name.toUpperCase()}</h2>
          <p className="app-description">{x.description.length > 50
    ? x.description.slice(0, 50) + "..."
    : x.description}<br></br>
          </p>
          <h1>
            ₹{new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(x.price)}
          </h1>

            <button className="view-button" onClick={()=>{setvopen(true);setvpopen(x.id)}}>view</button>
            <button className="view-button" onClick={()=>{console.log(x.id)
            }}>Delete</button>

          
        </div>
      </div>
      </>
      )
      return appcard

    }




  return (
    <div style={styles.container}>
      {/* Main Card Container */}

        {genratecards()}


      {/* Floating + Button */}




        <div 
        id="human"
        style={{
          height:"95vh",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          display:"none",
          top:0,
          bottom:0,
          left:0,
          right:0,
        }}
      >
      {popupv()}
    </div>
    </div>
  );
}
