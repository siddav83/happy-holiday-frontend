import React, { useContext } from "react";
import "./style.css";
import { UserContext } from "../../Context/UserContext";

const Profile = ({ username, type }) => {
	const { userData } = useContext(UserContext);

	const openProfile = () => {
		console.log("Open profile");
	};
	return (
		<div className="profile">
			<div className="profile-avatar">
				<img
					src={
						type === "user"
							? userData.avatar
							: "https://cdn-icons-png.flaticon.com/512/621/621913.png"
					}
					alt="avatar"
				/>
			</div>

			<div className="profile-username" onClick={openProfile}>
				<h3>{username ? username : "Test"}</h3>
				<img
					src="https://cdn-icons-png.flaticon.com/512/892/892817.png"
					alt="leaf"
					className="profile-leaf"
				/>
			</div>
		</div>
	);
};

export default Profile;
