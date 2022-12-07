import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import {
	TabNav,
	CategoryCard,
	AddCategory,
	HolidaysNavbar,
} from "../../Components";
import "./style.css";
import axios from "axios";

export default function Tab() {
	const [friendData, setFriendData] = useState();
	const [friendsId, setFriendsId] = useState("test");

	const { categoryData, visible, setVisible } = useContext(CategoryContext);
	const { userData, setUserData } = useContext(UserContext);

	useEffect(() => {
		const username = userData.friendViewing.username;
		// Get Friends ID
		axios.get(`http://127.0.0.1:5000/users/${username}`).then((res) => {
			setFriendsId(res.data.id);
			console.log(friendsId);
		}, []);

		// axios
		// 	.get(`http://127.0.0.1:5000/users/${userData.friendsViewing.id}/wishlist`)
		// 	.then((res) => {
		// 		const data = res.data;
		// 		setUserData((prev) => {
		// 			return { ...prev, wishlist: data };
		// 		});
		// 	});
	}, []);

	// const onSubmitHandler = (e) => {
	// 	e.preventDefault();
	// 	const type = e.target.type.value;
	// 	const category = e.target.category.value;
	// 	const item = e.target.item.value;

	// 	const obj = {
	// 		category,
	// 		item,
	// 	};
	// 	setUserData((prev) => {
	// 		return { ...prev, [type]: [...prev[type], { obj }] };
	// 	});

	// 	setVisible(visible);
	// };
	const { username, tab } = userData.friendViewing;

	return (
		<div className="main-container">
			<h1>{username + "'s " + tab}</h1>
			{visible ? (
				<div className="like-dislike-container">
					<AddCategory />
				</div>
			) : (
				visible
			)}
			<TabNav type="friends" />
			<div className="card-container">
				{friendData?.map((card, i) => {
					return (
						<div key={i}>
							<CategoryCard data={card} index={i} />
						</div>
					);
				})}
			</div>
			<HolidaysNavbar />
		</div>
	);
}
