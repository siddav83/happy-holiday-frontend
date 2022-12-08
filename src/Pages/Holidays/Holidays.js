import React, { useContext, useEffect } from "react";
import "./style.css";
import {
	Countdown,
	HolidaysNavbar,
	FunFact,
	Content,
	Navbar,
	Shortcuts,
} from "../../Components";
import { Calendar } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
const baseUrl = "https://happy-holidays-backend.onrender.com/";

const Holidays = () => {
	const { calendarToggle } = useContext(ToggleContext);
	const { userData, setUserData } = useContext(UserContext);

	useEffect(() => {
		axios.get(`${baseUrl}users/${userData.username}`).then((res) => {
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
			<div>
				{!calendarToggle && <Navbar />}

				<Content>
					{!calendarToggle ? (
						<>
							<Countdown type="users" />
							<FunFact type="fact" />
							<FunFact type="joke" />
						</>
					) : (
						<Calendar />
					)}
					{/* <HolidaysNavbar /> */}
					<Shortcuts back='/'/>
				</Content>
			</div>
		</>
	);
};

export default Holidays;
