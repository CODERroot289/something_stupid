import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
// import Dmenu from "../Menu/Dmenu.jsx"
import "./css/Home.css"
// import MyShop from "../pages/dashboard/dashboard-MyShop.jsx"

import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
export default function Home() {
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://productdb.up.railway.app/products") // server endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
    console.log(products)
    function cards(x){
      console.log(x)
      let appcard =(
        <>
        <div class="app-card">
        <img src={`https://productdb.up.railway.app/${x.images[0]}`} alt="App 1"></img>
        <div class="app-details" onclick="goappdetails('app3')">
          <h2 class="app-title">{x.name}</h2>
          <p class="app-description">{x.description.length > 50
    ? x.description.slice(0, 50) + "..."
    : x.description}<br></br>
          </p>
          <h1>
           { x.price}₹
          </h1>
          
            <button class="view-button">view</button>
          
        </div>
      </div>
      </>
      )
      return appcard

    }
  return(
    <>
      {/*<div className="bgi"></div>*/}
    {/*<Header/>*/}
    <div style={{display: "grid"}}>
      <ul id="categories">
        <Link  className="menu-link">
        <li >electronic</li>
        </Link>
        <Link  className="menu-link">
        <li >meat</li>
        </Link>
                <Link  className="menu-link">
        <li >fish</li>
        </Link>
                <Link  className="menu-link">
        <li >vegetables</li>
        </Link>
                <Link  className="menu-link">
        <li >food</li>
        </Link>        <Link  className="menu-link">
        <li >cars</li>
        </Link>

      </ul>
      <div id="ads" ></div>
      <div id="card-container">
        {products.map((item, index) => (<>
          {cards(item)}

        </>))}
{/*      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}
      {appcard}*/}
      </div>
      {/*<Dmenu/>*/}
      {/*<div id="card-container" style={{height:"100vh"}}>*/}
        {/*{renderContent()}*/}
      {/*</div>*/}
{/*        <h2>Study Materials</h2>
        <p>Question papers</p>*/}
{/*
      <section className="resources">
          <div className="mcode"  >
      <span style={{ color: "blue" }}>class</span> Life:
      {"\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>__init__</span>(self):
      {"\n"}        self.depression ={" "}
      <span style={{ color: "purple" }}>True</span>
      {"\n"}        self.motivation ={" "}
      <span style={{ color: "black" }}>0</span>
      {"\n"}        self.is_alive ={" "}
      <span style={{ color: "purple" }}>True</span>
      {"\n\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>run</span>(self):
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"System Booting..."</span>)
      {"\n"}        <span style={{ color: "blue" }}>if</span>{" "}
      self.depression:
      {"\n"}            self.suicide()
      {"\n"}        <span style={{ color: "blue" }}>else</span>:
      {"\n"}            <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Survival Mode: ON"</span>)
      {"\n\n"}    <span style={{ color: "blue" }}>def</span>{" "}
      <span style={{ fontWeight: "bold" }}>suicide</span>(self):
      {"\n"}        self.is_alive ={" "}
      <span style={{ color: "purple" }}>False</span>
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"fatal error: EmotionDamgeOverflowException"</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Terminating process: life()"</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Suicide() executed."</span>)
      {"\n"}        <span style={{ color: "blue" }}>print</span>(
      <span style={{ color: "green" }}>"Goodbye, world."</span>)
      {"\n\n"}me = Life()
      {"\n"}me.run()
    </div>



      </section>*/}
{/*      
      <section className="about" style={{height: "40vh"}}>
        <h2>About US</h2>
        <ul>
          
        <li className="about li">IDKNOTME</li>
        <li className="about li">IDKABOUTME</li>
        <li className="about li">IDKABOUTUS</li>
        </ul>
      </section>*/}
    </div>


    <Footer/>
    </>
    )

}
