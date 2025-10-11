import './Header.css'
import Menu from '../Menu/Menu.jsx'
import { useEffect,useState } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function Header() {
	const [user, setUser] = useState(null);
	let mencon = false
  	useEffect(() => {
	    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		    if (currentUser) {
		    	setUser(currentUser); // User is logged in
		    	console.log(currentUser)
	    		let log_sign =document.getElementsByClassName("sline")
	    		for(let x of log_sign){
	    			x.style.display ="none"
	    		}

		    } else {
		      setUser(null); // User is logged out
		    }
		  });

		  // Cleanup subscription on unmount
		  return () => unsubscribe();
	}, []);
	useEffect(() => {
	    const handleClick = (event) => {
	      if ( event.target.id !== "Menu" && event.target.className != "menu-btn"){
	      	hidemenu()
	      	// console.log(event.target.className)
	      };
	    };
	    document.addEventListener('click', handleClick);
	    return () => {
	      document.removeEventListener('click', handleClick);
	    };
	 }, []);





	
	function showmenu(){
		let header = document.getElementsByClassName("Header")[0]
		let menu = document.getElementById("Menu")
		menu.style.display = "flex"
		mencon = true
		// header.style.display = "none"
		// console.log("ehe")
	}	
	function hidemenu(){
		if (mencon) console.log(mencon)
		let menu = document.getElementById("Menu")
		menu.style.display = "none"
		// console.log("ehe")
	}
	
	
	return (
		<>
		<Menu/>
		<header className='header'>
			<button className='menu-btn' onClick={showmenu}>☰</button>
			<h1>
			<o>I</o><o>d</o><o>K</o><o>N</o><o>o</o><o>M</o><o>e</o></h1>
			<div>
				<ul>

					<a href="/"><li>Home</li></a>
					{user ? (
						<>
						<vr></vr>
						<a href="/dashboard"><li>Dashboard</li></a>
						</>
					):(<></>)  }
					{/*<vr></vr>*/}
					{/*<a href="#"><li>Source Codes</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>Study Materials</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>Downloads</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>About</li></a>*/}
				</ul>
				<div className='slin'>
				{user ? (<p>USER</p>):(
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
			  
			</div>
			{/*<hr></hr>*/}
			

		</header>	
	</>
	);
};

export default Header