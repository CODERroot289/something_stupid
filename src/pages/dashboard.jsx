import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"


import Home from "./Home.jsx"
import Sale from "./sale.jsx"
import Cart from "./cart.jsx"
import MyShop from "./Myshop.jsx"



// import MyShop from "../pages/dashboard/dashboard-MyShop.jsx"



import "./css/dashboard.css"
// import "./css/Home.css"
// import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import {db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link ,useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useState,useEffect} from "react";
import { doc, onSnapshot ,getDoc } from "firebase/firestore";
export default function Dashboard() {

const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // console.log(getSystemTheme())
  document.documentElement.setAttribute('data-theme', getSystemTheme());

  const [query, setQuery] = useState("");
  const [recommandation, setRecommandation] = useState(Math.random());

  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("home");
  const [user, setUser] = useState(null);
  // const loadacc = async ()=>{



  const [userData, setUserData] = useState(null);
useEffect(() => {
  if (!user) return; // Wait until user is loaded

  const docRef = doc(db, "users", user.uid);

  // Subscribe to realtime updates
  const unsub = onSnapshot(
    docRef,
    (snap) => {
      if (snap.exists()) {
        setUserData(snap.data());
      } else {
        console.log("No such document!");
      }
    },
    (err) => {
      console.error("Error listening for updates:", err);
    }
  );

  // Cleanup when component unmounts or user changes
  return () => unsub();
}, [user]);




  const navigate = useNavigate();
  useEffect(() => {
        console.log("fdzd")
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser); // User is logged in

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
        <MyShop user={user} userData={userData} />
        </>)
      return MyShops
    }
    if (activePage === "home") {
       // setRecommandation()
      console.log("loool")
       let home =(
        <>
        <Home query={query} rec = {recommandation} user={user}/>
        </>)
      return home
    }
    


    if (activePage === "cart"){
      let cart =(
      <>
      <Cart user={user} userData={userData}/>
      </>)
        
      return cart
    

    } 

    if (activePage === "user"){
      let User =(
      <>
        <h1>User</h1>
      </>)
      return User
    }     if (activePage === "Services"){
      let User =(
      <>
        <h1>Services</h1>
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

    return <button id="lgout" onClick={handleLogout}>Log Out</button>;
  }




  const menuItems = [
    { name: "Home", icon: "fa-solid fa-home", path: "home" },
    { name: "My Account", icon: "fa-solid fa-user", path: "user" },
    { name: "Cart", icon: "fa-solid fa-cart-shopping", path: "cart" },
    { name: "My Services", icon: "fa-solid fa-store", path: "Services" },
    { name: "My Ads ⁽ᶠᵒʳ ᵐᵉᵐᵇᵉʳ⁾", icon: "fa-solid fa-store", path: "shop" },
    // { name: "", icon: "fa-solid fa-store", path: "shop" },
  ];


  
  return(
    <>
      <div className="bgi"></div>
    <Header setQuery ={setQuery}/>

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
        <ul id="luker" className="menu">
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
