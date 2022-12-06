import React, { useContext } from "react";
import "./style.css";
import { UserContext } from "../../Context/UserContext";

const TabNav = ({ type }) => {
	const { setUserData } = useContext(UserContext);

	const updateTab = (e) => {
		const tab = e.target.getAttribute("data-type");
		if (type === "friends") {
			setUserData((prev) => {
				return { ...prev, friendViewing: { ...prev.friendViewing, tab } };
			});
		} else {
			setUserData((prev) => {
				return { ...prev, tab };
			});
		}
	};

	return (
		<nav className="tabnav-navbar">
			<button onClick={updateTab}>
				<i className="fa-regular fa-thumbs-up" data-type="Wants"></i>
			</button>
			<button onClick={updateTab}>
				<i className="fa-regular fa-thumbs-down" data-type="Dislikes"></i>
			</button>
			<button onClick={updateTab}>
				<i className="fa-regular fa-star" data-type="Brands"></i>
			</button>
			<button onClick={updateTab}>
				<i className="fa-solid fa-face-grin-hearts" data-type="Dreams"></i>
			</button>
		</nav>
	);
};

export default TabNav;
