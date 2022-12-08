import React, { useContext } from "react";
import "./style.css";
import { UserContext } from "../../Context/UserContext";

const TabNav = ({ type }) => {
	const { setUserData } = useContext(UserContext);

	const updateTab = (e) => {
		const tab = e.target.getAttribute("data-type");
		if (type === "friends") {
			setUserData((prev) => {
				return {
					...prev,
					friendViewing: { ...prev.friendViewing, tab },
				};
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
				<p className="type" data-type="Wants">
					👍
				</p>
			</button>
			<button onClick={updateTab}>
				<p className="type" data-type="Dislikes">
					👎
				</p>
			</button>
			<button onClick={updateTab}>
				<p className="type" data-type="Dreams">
					🌟
				</p>
			</button>
		</nav>
	);
};

export default TabNav;
