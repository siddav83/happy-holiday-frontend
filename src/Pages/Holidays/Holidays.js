import React, { useContext, useEffect } from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";
import { Calendar } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

const Holidays = () => {
	const { calendarToggle } = useContext(ToggleContext);
	const { userData, setUserData } = useContext(UserContext);

	useEffect(() => {
		axios.get(`http://127.0.0.1:5000/users/${userData.id}`).then((res) => {
			const data = res.data;
			setUserData((prev) => {
				return {
					...prev,
					friends: data.friends.friends_list,
					username: data.username,
				};
			});
		});
	}, []);

	return (
		<>
			<div className="main-container">
				{!calendarToggle && <h1 className="main-heading">Happy Holidays!</h1>}

				{!calendarToggle ? (
					<>
						<Countdown />
						<FunFact type="fact" />
						<FunFact type="joke" />
					</>
				) : (
					<Calendar />
				)}
			</div>
			<HolidaysNavbar />
		</>
	);
};

export default Holidays;
