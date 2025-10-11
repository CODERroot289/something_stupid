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

			<div>
				<ul>

					<a href="/"><li>Home</li></a>
					{user ? (
						<>
						<vr></vr>
						<a href="/dashboard"><li>Dashboard</li></a>
						</>
					):(<></>)  }
					<vr></vr>
					<a href="#"><li>seller</li></a>
					<vr></vr>
					<a href="#"><li>buyer</li></a>
					{/*<vr></vr>*/}
					{/*<a href="#"><li>Downloads</li></a>*/}
					{/*<vr></vr>*/}
					{/*<a href="#"><li>About</li></a>*/}
				</ul>
				<div className='slin'>
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
			  
			</div>
			{/*<button className='menu-btn' }>☰</button>*/}
		
			

		</div>	
	);
};

export default Menu