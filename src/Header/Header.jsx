import './Header.css'
import Menu from '../Menu/Menu.jsx'
import { useEffect,useState } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
function Header({ setQuery }) {

	// 	function SearchBarExample() {
	// 	  const [searchTerm, setSearchTerm] = useState("");
		  
	// 	  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

	// 	  const filteredItems = items.filter(item =>
	// 	    item.toLowerCase().includes(searchTerm.toLowerCase())
	  // );

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

	  return <button id="lgo" onClick={handleLogout}>Log Out</button>;
	}
	const [user, setUser] = useState(null);
	let mencon = false
  	useEffect(() => {
	    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		    if (currentUser) {
		    	setUser(currentUser); // User is logged in
		    	// console.log(currentUser)
	    		let log_sign =document.getElementsByClassName("sline")
	    		for(let x of log_sign){
	    			x.style.display ="none"
	    		}

		    } else {
		      setUser(null); 
		    }
		  });

		  
		  return () => unsubscribe();
	}, []);
	useEffect(() => {
	    const handleClick = (event) => {
	      if ( event.target.id !== "Menu" && event.target.className != "menu-btn"){
	      	hidemenu()
	      	
	      };
	    };
	    document.addEventListener('click', handleClick);
	    return () => {
	      document.removeEventListener('click', handleClick);
	    };
	 }, []);





	
	function showmenu(){
		let header = document.getElementsByClassName("Header")[0]
		// let menu = document.getElementById("Menu")
		let menu = document.getElementById("sidebar")
		menu.style.display = "contents"
		mencon = true
		// header.style.display = "none"
		// console.log("ehe")
	}	
	function hidemenu(){
		if (mencon) console.log(mencon)
			if(window.innerWidth <= 768){
				
		let menu = document.getElementById("sidebar")
		menu.style.display = "none"
			}
		// console.log("ehe")
	}
	
	
	return (
		<>
		<Menu/>
		<header className='header'>
			<button className='menu-btn' onClick={showmenu}>☰</button>
			{/*<h1><o>I</o><o>d</o><o>K</o><o>N</o><o>o</o><o>M</o><o>e</o></h1>*/}

			<div id='logo'style={{

		    lignContent: "flex-end",
		    alignItems: "center",
		    flexWrap: "wrap",
		    alignContent: "space-around",
		    justifyContent: "space-around",
		    width:"10vw"

			}}></div>
			<p style={{fontSize:".8rem",whiteSpace:"pre"}}>
				mundamveli kochi
				<p>pin:682507</p>
			</p>
		{/*</div>*/}
			


{/*					<a href="/"><li>Home</li></a>
					{user ? (
						<>
						<vr></vr>
						<a href="/dashboard"><li>Dashboard</li></a>
						</>
					):(<></>)  }*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>seller</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>buyer</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>Downloads</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>About</li></a>*/}
				 <input
				        type="text"
				        placeholder="Search..."
				        id="searchbar"
				        onChange={(e) => setQuery(e.target.value)}
				        // value={searchTerm}
				        // onChange={(e) => setSearchTerm(e.target.value)}
				        style={{
				          padding: "10px",
				          width: "800px",
				          borderRadius: "8px",
				          border: "1px solid #ccc",
				          // marginBottom: "20px",
				        }}
				      />

				<div className='slin'>
			    <button >Services</button>
				{user ? (LogoutButton()):(
					<>
					<a href='/register'className='sline'>
						<button>Sign in</button>
					</a>
					<a href='/login'className='sline'>
						<button>log in</button>
					</a>
					</>		      
			    )}
				</div>
			  

			{/*<hr></hr>*/}
			

		</header>	
	</>
	);
};

export default Header