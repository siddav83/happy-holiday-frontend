import React, { useContext } from "react";
import "./style.css";
import {
	Profile,
	HolidaysNavbar,
	AddFriend,
	Navbar,
	Content,
	Shortcuts,
} from "../../Components";
import { ToggleContext } from "../../Context/ToggleContext";
import { UserContext } from "../../Context/UserContext";
import { FestivityContext } from "../../Context/FestivityContext";

const Friends = () => {
	const { darkMode } = useContext(FestivityContext);
	const { toggleAddFriend, setToggleAddFriend } = useContext(ToggleContext);
	const { userData } = useContext(UserContext);

	return (
		<div>
			<Navbar></Navbar>
			<Content>
				<div className="friends-container">
					<h1>Friends</h1>
					<div className="friends-heading">
						<img
							src="https://cdn-icons-png.flaticon.com/512/2531/2531564.png"
							alt="User icon"
						/>
						<h2>Your Profile</h2>
					</div>
					<Profile username={userData?.username} type="user" />
					<div className="friends-heading">
						<img
							src="https://cdn-icons-png.flaticon.com/512/3695/3695380.png"
							alt="friends icon"
						/>
						<h2>Friends ({userData.friends?.length || 0})</h2>
						<button
							onClick={() => setToggleAddFriend(true)}
							className={darkMode ? "add-friend-btn-dark" : "add-friend-btn"}
						>
							<i className="fa-solid fa-circle-plus"></i>
						</button>
					</div>

					<hr />
					<div className="friends-list">
						{userData.friends?.map((friend, i) => (
							<Profile username={friend} type="friend" key={i} />
						))}
					</div>
					{toggleAddFriend && <AddFriend />}
				</div>
			</Content>
			{/* <HolidaysNavbar /> */}
			<Shortcuts back='/holidays'/>
		</div>
	);
};

export default Friends;
