import React from "react";
import "./style.css";
import AvatarData from "../../Data/AvatarData";

const Profile = () => {
	const openProfile = () => {
		console.log("Open profile");
	};
	return (
		<div className="profile">
			<div className="profile-avatar">
				<img src={AvatarData[1]} alt="avatar" />
			</div>

			<div className="profile-username" onClick={openProfile}>
				<h3>Username</h3>
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
