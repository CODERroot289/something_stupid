import './Menu.css'
import { useEffect,useState } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
function Menu() {
	const [user, setUser] = useState(null);
	let mencon = false


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
		      setUser(null); 
		    }
		  });

		  
		  return () => unsubscribe();
	}, []);
	
	
	
	
	
	
	return (
		<div id='Menu'>

			<div style={{display: "flex",
				justifyContent: "space-around",
				flexDirection: "column",
				alignItems: "center",
				height: "55vh"

			}}>
					<h1>
			<o>I</o><o>d</o><o>K</o><o>N</o><o>o</o><o>M</o><o>e</o></h1>
			<br></br>

					<a href="/"><button className='sline'>Home</button></a>
					{user ? (
						<>
						
						<a href="/dashboard"><button className='sline'>Dashboard</button></a>
						</>
					):(<></>)  }
					
					<a href="#"><button className='sline'>seller</button></a>
					
					<a href="#"><button className='sline'>buyer</button></a>
					{/**/}
					{/*<a href="#"><li>Downloads</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>About</li></a>*/}
				
			<br></br>
				<div className='slin'>
				{user ? (LogoutButton()):(
					<>
					<a href='/register'>
						<button>Sign in</button>
					</a>
					<a href='/login'>
						<button>log in</button>
					</a>
					</>		      
			    )}
				</div>
			  
			</div>
			{/*<button className='menu-btn' }>☰</button>*/}
		
			

		</div>	
	);
};

export default Menu