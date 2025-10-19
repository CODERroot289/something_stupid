import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
// import Dmenu from "../Menu/Dmenu.jsx"
import "./css/Home.css"
// import MyShop from "../pages/dashboard/dashboard-MyShop.jsx"

import { Link } from "react-router-dom";

import { useState ,useEffect} from "react";
export default function Home({ query }) {
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
  const [vpopen, setvpopen] = useState(0);

  const ranno =Math.random()

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
                   ₹{p.price}
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

      return products
        .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        .map((item, index) => (
          <>
            {cards(item)}
          </>
        ))
      


      }else{
        // if (vpopen ==0){

           return  getRandomItems(products).map((item, index) => (<>
          {cards(item)}

            </>))
          // console.log(pl)

          // return pl
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
        <div className="app-details" onClick={console.log("dsa")}>
          <h2 className="app-title">{x.name.toUpperCase()}</h2>
          <p className="app-description">{x.description.length > 50
    ? x.description.slice(0, 50) + "..."
    : x.description}<br></br>
          </p>
          <h1>
            ₹{ x.price}
          </h1>

            <button className="view-button" onClick={()=>{setvopen(true);setvpopen(x.id)}}>view</button>
            <button className="view-button" onClick={()=>{console.log(activePage)}}>cart</button>

          
        </div>
      </div>
      </>
      )
      return appcard

    }
    function getRandomItems(arr, count = 15) {
      if (arr.length <= count) return arr; 
      return arr.sort(() => ranno - 0.5).slice(0, count);
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
                <Link  className="menu-link">
        <li >FISH</li>
        </Link>
                <Link  className="menu-link">
        <li >VEGETABLES</li>
        </Link>
                <Link  className="menu-link">
        <li >FOOD</li>
        </Link>      {/*  <Link  className="menu-link">
        <li >cars</li>

*/}
      </ul>
      <div id="ads" ></div>
      <div id="card-container">
        {genratecards()}
              <div 
        id="human"
        style={{
          height:"100vh",
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
