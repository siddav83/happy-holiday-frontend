import React, { useContext, useEffect } from "react";
import "./style.css";
import { ToggleContext } from "../../Context/ToggleContext";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

const AddFriend = () => {
	const { setToggleAddFriend } = useContext(ToggleContext);
	const { userData, setUserData } = useContext(UserContext);

	// useEffect(() => {

	// })

	function addNewFriend(e) {
		e.preventDefault();
		const friend = e.target.username.value;
		// Add User (POST)
		axios
			.post(`http://127.0.0.1:5000/users/${userData.id}/friends`, { friend })
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.status === 201) {
					console.log("Friend added.");
					console.log(res.data);
					setToggleAddFriend(false);
					// ! need friends ID im adding
					setUserData((prev) => {
						return { ...prev, friends: [...prev.friends, friend] };
					});
				} else {
					alert.log("Friend not added, username doesn't exist.");
				}
			})
			.catch((err) => console.error(err));
	}

	function inviteFriend(e) {
		e.preventDefault();
		const email = e.target.email.value;
		// Send Invite Email (POST)
		axios
			.post("http://127.0.0.1:5000/share", email)
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.status === 200) {
					console.log("Added");
				} else {
					console.log("Oops but couldn't invite...");
				}
			})
			.catch((err) => console.error(err));
	}
	return (
		<div className="add-or-invite-container">
			<div className="add-or-invite">
				<h3>Add A Friend</h3>
				<form onSubmit={addNewFriend}>
					<i className="fa-solid fa-circle-xmark"></i>
					<input
						type="text"
						id="username"
						name="username"
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
					<input
						type="text"
						id="email"
						name="email"
						placeholder="Enter Email..."
					/>
					<input type="submit" value="Invite" />
				</form>
			</div>
		</div>
	);
};

export default AddFriend;
