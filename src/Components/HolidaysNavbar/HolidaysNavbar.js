import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
	return (
		<nav className="holidays-navbar">
			<NavLink to="/">
				<i className="fa-solid fa-right-from-bracket"></i>
			</NavLink>
			<NavLink to="/community">
				<i className="fa-solid fa-earth-europe"></i>
			</NavLink>
			<NavLink to="/holidays">
				<i className="fa-solid fa-clock"></i>
			</NavLink>
			<NavLink to="/friends">
				<i className="fa-solid fa-user-group"></i>
			</NavLink>
		</nav>
	);
};

export default Navbar;
