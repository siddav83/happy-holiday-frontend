import React, { useContext } from "react";
import "./style.css";
import { Profile, HolidaysNavbar } from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";

const Friends = () => {
	const { toggleAddFriend, setToggleAddFriend } = useContext(ToggleContext);

	const addNewFriend = (e) => {
		e.preventDefault();
		// Run a Post request
		console.log("Adding friends...");
	};

	const inviteFriend = (e) => {
		e.preventDefault();
		// Run a Post request
		console.log("Inviting friends...");
	};

	return (
		<div className="main-container friends-container">
			<div className="friends-heading">
				<img
					src="https://cdn-icons-png.flaticon.com/512/2531/2531564.png"
					alt="User icon"
				/>
				<h2>Your Profile</h2>
			</div>
			<Profile />
			<div className="friends-heading">
				<img
					src="https://cdn-icons-png.flaticon.com/512/3695/3695380.png"
					alt="friends icon"
				/>
				<h2>Friends (2)</h2>
				<button onClick={() => setToggleAddFriend(true)}>
					<i className="fa-solid fa-circle-plus"></i>
				</button>
			</div>

			<hr />
			<div className="friends-list">
				<Profile />
				<Profile />
			</div>
			{toggleAddFriend && (
				<div className="add-or-invite-container">
					<div className="add-or-invite">
						<h3>Add A Friend</h3>
						<form onSubmit={addNewFriend}>
							<i className="fa-solid fa-circle-xmark"></i>
							<input
								type="text"
								id="username"
								placeholder="Enter Username..."
							/>
							<input type="submit" value="Add" />
						</form>

						<h3>Invite</h3>
						<form onSubmit={inviteFriend}>
							<i
								className="fa-solid fa-circle-xmark"
								onClick={() => setToggleAddFriend(false)}
							/>
							<input type="text" id="email" placeholder="Enter Email..." />
							<input type="submit" value="Invite" />
						</form>
					</div>
				</div>
			)}

			<HolidaysNavbar />
		</div>
	);
};

export default Friends;
