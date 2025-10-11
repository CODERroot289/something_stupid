import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
import shop from "../Footer/footer.jsx"
import MyShop from "../pages/dashboard-MyShop.jsx"
import "./css/dashboard.css"
// import "./css/Home.css"

import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useState,useEffect} from "react";
export default function Dashboard() {
const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // console.log(getSystemTheme())
  document.documentElement.setAttribute('data-theme', getSystemTheme());



  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("shop");
  const [user, setUser] = useState(null);
  // const loadacc = async ()=>{

  useEffect(() => {
        console.log("fdzd")
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser); // User is logged in
            // console.log(currentUser)
            // let log_sign =document.getElementsByClassName("sline")
            // for(let x of log_sign){
            //   x.style.display ="none"
            // }

          } else {
            setUser(null); // User is logged out
            if (!user){
              window.location.href = "/login"
            }

          }
        });
        return () => unsubscribe();
      })
  // }

        // Cleanup subscription on unmount
  const renderContent = () => {
    

    if (activePage === "shop") {
       let MyShops =(
        <>
        <MyShop/>
        </>)
      return MyShops
    }
    


    if (activePage === "cart"){
      let cart =(
      <>
      <h1>Cart</h1>
       
      </>)
        
      return cart
    

    } 

    if (activePage === "user"){
      let User =(
      <>
        <h1>User</h1>
      </>)
      return User
    } 
  };


  const menuItems = [
    { name: "Cart", icon: "fa-solid fa-cart-shopping", path: "cart" },
    { name: "My Shops", icon: "fa-solid fa-store", path: "shop" },
    { name: "User", icon: "fa-solid fa-user", path: "user" },
  ];


  
  return(
    <>
      <div className="bgi"></div>
    <Header/>

    <div className="home">
      {/*<section className="projects">*/}
        <div className="container">
      <div className={open ? "sidebar open" : "sidebar"}>
        <div className="sidebar-header">
          {open && <span className="logo">MyApp</span>}
          <button className="toggle-btn" onClick={() => setOpen(!open)}>
            <FaBars />
          </button>
        </div>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li onClick={() => setActivePage(item.path)}  key={index}>
              <Link  className="menu-link">
                <span className="icon" ><i className={item.icon}></i></span>
                {open && <span className="text">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
      {/*</section>*/}

  {/*    <section className="about">
        <h2>About US</h2>
        <p>IDKNOTME</p>
        <p>IDKABOUTME</p>
        <p>IDKABOUTUS</p>
      </section>*/}
    </div>


    <Footer/>
    </>
    )
  

}
