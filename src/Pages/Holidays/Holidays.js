import React, { useContext, useEffect } from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";
import { Calender } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

const Holidays = () => {
	const { userData, setUserData } = useContext(UserContext);
	console.log(userData);
	useEffect(() => {
		const data = axios
			.get(`http://127.0.0.1:5000/users/${userData.id}`)
			.then((res) => {
				const data = res.data;
				setUserData((prev) => {
					return {
						...prev,
						friends: data.friends.friends_list,
						username: data.username,
					};
				});
			});
		console.log(userData);
	}, []);

	const { calenderToggle, setCalenderToggle } = useContext(ToggleContext);

	const toggleCalender = () => {
		setCalenderToggle((prev) => !prev);
	};

	return (
		<>
			<div className="main-container">
				{!calenderToggle && <h1 className="main-heading">Happy Holidays!</h1>}

				{!calenderToggle ? (
					<>
						<Countdown />
						<FunFact />
						<button className="calender-btn" onClick={toggleCalender}>
							Open Calender
						</button>
					</>
				) : (
					<Calender setCalenderToggle={setCalenderToggle} />
				)}
			</div>
			<HolidaysNavbar />
		</>
	);
};

export default Holidays;
