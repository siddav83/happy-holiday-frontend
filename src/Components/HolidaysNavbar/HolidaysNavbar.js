import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
	return (
		<nav className="holidays-navbar">
			<NavLink to="/">
				<i class="fa-solid fa-right-from-bracket"></i>
			</NavLink>
			<NavLink to="/community">
				<i class="fa-solid fa-earth-europe"></i>
			</NavLink>
			<NavLink to="/holidays">
				<i class="fa-solid fa-clock"></i>
			</NavLink>
			<NavLink to="/friends">
				<i class="fa-solid fa-user-group"></i>
			</NavLink>
		</nav>
	);
};

export default Navbar;
