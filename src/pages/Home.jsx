import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
// import Dmenu from "../Menu/Dmenu.jsx"
import "./css/Home.css"
// import MyShop from "../pages/dashboard/dashboard-MyShop.jsx"
import { doc, setDoc,updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import React from "react";

import { useState ,useEffect} from "react";
export default function Home({ query,rec,user }) {
const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // console.log(getSystemTheme())
    // let products= {
    //   "Name":,
    //   "Image":,
    //   "Desc":,
    //   "categories":,
    //   "Price":,
    //   "location":

    // }

  // const vbg = document.querySelector(".div");

  // function toggleBlur() {
  //   vbg.classList.toggle("blur-background");
  // }
  const [vopen, setvopen] = useState(false);
  const [catopen, setcatopen] = useState(false);
  const [vpopen, setvpopen] = useState(0);

  const ranno =rec


  async function addProduct(userId, product) {
      const userRef = doc(db, "users", userId);
      try {
         await setDoc(
          userRef,
          {
            cart: arrayUnion(product), // optional initial field if not created yet
          },
          { merge: true } // this creates the doc if it doesn’t exist
        );
        alert("✅ Product added!");

      } catch (err) {
        console.log("❌ Error adding product:", err);
        alert("❌ Error adding product:", err);
      }
    }











 function catmenu() {


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


    function genratecards() {


      if (query){

    // Before return, define a starting random number:
    const startNumber = Math.floor(Math.random() * (1000 - 250 + 1)) + 250;
const shopNames = [
  "FreshMart",
  "QuickFix Hardware",
  "Urban Threads",
  "TechZone",
  "Nature’s Basket",
  "Daily Needs Store",
  "SmartElectro",
  "HomeStyle Furnishings",
  "Pet Paradise",
  "The Gadget Hub",
  "Bake & Brew",
  "The Book Haven",
  "Sparkle Cleaners",
  "Farm2Table Organics",
  "MegaMart",
  "Style Street",
  "Bright Tools",
  "Cool Corner",
  "Handy Hub",
  "Royal Cuts"
];



    return products
      .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      .map((item, index) => {
        // increase number for each element

        const rnumber = startNumber +  Math.floor(Math.random() * (index*50 - 100 + index)) + 100;
        return (
          <React.Fragment key={index}>
            {searchcards(item, rnumber,shopNames[Math.floor(Math.random() * shopNames.length)])}
          </React.Fragment>
        );
      });


      


      }else{
        // if (vpopen ==0){

           let pl = getRandomItems(products)
          console.log(pl)
          return pl.map((item, index) => (<>
          {cards(item)}

            </>))

        // }
        // else{
        //   console.log(pl)
        //   return pl
        // }
      }

    }


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productdb.up.railway.app/products") // server endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
    // console.log(products)
    function cards(x){
      // console.log(x)
      let appcard =(
        <>
        <div className="app-card">
        <img src={`https://productdb.up.railway.app/${x.images[0]}`} alt="App 1"></img>
        <div className="app-details">
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
            <button className="view-button" onClick={()=>{addProduct(user.uid,x.id)}}>cart</button>

          
        </div>
      </div>
      </>
      )
      return appcard

    }
    function searchcards(x,n,kada){
      // console.log(x)

      let appcard =(
        <>
        <div className="app-card">
        <img src={`https://productdb.up.railway.app/${x.images[0]}`} alt="App 1"></img>
        <div className="app-details">
          <h2 className="app-title">{x.name.toUpperCase()}</h2>
          <p style={{color:"green",fontSize:".8rem",whiteSpace:"pre"}}>Within :{n}m   </p>
          <p style={{color:"blue",fontSize:".8rem",whiteSpace:"pre"}}>Shop: {kada}</p>
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
            <button className="view-button" onClick={()=>{addProduct(user.uid,x.id)}}>cart</button>

          
        </div>
      </div>
      </>
      )
      return appcard

    }
    function getRandomItems(arr, count = 15) {
      const copy = arr.slice();
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(ranno * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, count);
    }

  return(
    <>
    
    <div style={{display: "grid"}}>
      <ul id="categories">
        <Link  className="menu-link">
        <br></br>
            
        
        <li > ELECTRONIC</li>
        </Link>
        <Link  className="menu-link">
        <li >MEAT</li>
        </Link>
                <Link  onClick={()=>{setvopen(true);setvpopen(x.id)}} className="menu-link">
        <li >NEARBY BESTSELLERS</li>
        </Link>
                <a  className="menu-link">
        <li >INDIA'S TOP TRENDS</li>
        </a>
{/*                <Link  className="menu-link">
        <li >FOOD</li>
        </Link>*/}      
        {/*  <Link  className="menu-link">
        <li >cars</li>

*/}
      </ul>
      <div id="ads" ></div>
      <div id="card-container">
        {genratecards()}
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
        {()=>{
          let input = document.getElementById("searchbar");

    input.addEventListener("input", () => {
      console.log("Value changed to:", input.value);
    });
        }}
      </div>
    </div>
    
    </div>



    <Footer/>
    </>
    )

}
