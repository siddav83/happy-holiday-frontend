import React from "react";
import "./style.css";
import { Countdown, HolidaysNavbar } from "../../Components";

const Holidays = () => {
	return (
		<>
			<div className="main-container">
				<h1 className="holidays-heading">Happy Holidays!</h1>
				<Countdown />
			</div>
			<HolidaysNavbar />
		</>
	);
};

export default Holidays;
