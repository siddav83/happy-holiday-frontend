import React from "react";
import "./style.css";
import { Profile, AddNav } from "../../Components";

const friends = () => {
	return (
		<div className="main-container friends-container">
			<Profile />
			{/* <AddNav /> */}
			<div className="friends-heading">
				<i class="fa-solid fa-user-group"></i>
				<h2>Friends (2)</h2>
			</div>

			<hr />
			<div className="friends-list">
				<Profile />
				<Profile />
				<Profile />
				<Profile />
			</div>
			<AddNav />
		</div>
	);
};

export default friends;
