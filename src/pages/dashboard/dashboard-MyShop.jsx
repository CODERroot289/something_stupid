import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useState} from "react";


export default function MyShop() {
	return(
<>
<div style={{display:"flex",justifyContent: "space-between",alignItems: "center"}}>
<h1>My Shop</h1>
<input type="search" placeholder="🔎 search" style={{height:"2rem"}}></input>
</div>
<button>+Add Products for sale</button>
<div></div>
			
</>

		)
}