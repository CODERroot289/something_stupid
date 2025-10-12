import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"


import Home from "./Home.jsx"
import Sale from "./sale.jsx"



// import MyShop from "../pages/dashboard/dashboard-MyShop.jsx"



import "./css/dashboard.css"
// import "./css/Home.css"
// import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link ,useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useState,useEffect} from "react";
export default function Dashboard() {
const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // console.log(getSystemTheme())
  document.documentElement.setAttribute('data-theme', getSystemTheme());



  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const [user, setUser] = useState(null);
  // const loadacc = async ()=>{
  const navigate = useNavigate();
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
              // window.location.href = "/login"
              navigate("/login")
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
        <Sale/>
        </>)
      return MyShops
    }
    if (activePage === "home") {
       let MyShops =(
        <>
        <Home/>
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
    function LogoutButton() {
    const handleLogout = () => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Signed out!");
          // navigate to login page
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    return <button onClick={handleLogout}>Log Out</button>;
  }

  const menuItems = [
    { name: "Home", icon: "fa-solid fa-home", path: "home" },
    { name: "My Account", icon: "fa-solid fa-user", path: "user" },
    { name: "Your orders", icon: "fa-solid fa-cart-shopping", path: "cart" },
    { name: "sell", icon: "fa-solid fa-store", path: "shop" },
    { name: "My Ads ⁽ᶠᵒʳ ᵐᵉᵐᵇᵉʳ⁾", icon: "fa-solid fa-store", path: "shop" },
    // { name: "", icon: "fa-solid fa-store", path: "shop" },
  ];


  
  return(
    <>
      <div className="bgi"></div>
    <Header/>

    <div className="home">
      {/*<section className="projects">*/}
        <div className="container">



      <div id="sidebar"className={open ? "sidebar open" : "sidebar"}>
        <div className="sidebar-header">
          {open && <span className="logo">Menu</span>}
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
        {LogoutButton()}
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
