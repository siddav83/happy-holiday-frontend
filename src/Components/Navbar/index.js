import React, { useContext } from "react";
import Button from "../Button";
import Logo from "../Logo";
import "./style.css";
import { FestivityContext } from "../../Context/FestivityContext";

export default function Navbar({ children }) {
	const { darkMode } = useContext(FestivityContext);
	return (
		<div className={darkMode ? "Navbar-dark" : "Navbar"}>
			<Logo />
			<div className="Navlinks">{children}</div>
		</div>
	);
}
