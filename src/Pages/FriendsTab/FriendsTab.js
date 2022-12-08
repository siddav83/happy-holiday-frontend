import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import {
	TabNav,
	CategoryCard,
	AddCategory,
	HolidaysNavbar,
	Shortcuts,
} from "../../Components";
import "./style.css";
import axios from "axios";

export default function Tab() {
	const [friendData, setFriendData] = useState();

	const { categoryData, visible, setVisible } = useContext(CategoryContext);
	const { userData, setUserData } = useContext(UserContext);

	useEffect(() => {
		const username = userData.friendViewing.username;

		const fetchPost = async () => {
			try {
				// Get Friends ID
				const friendsData = await axios(
					`http://127.0.0.1:5000/users/${username}`
				);
				const friendsId = friendsData.data.id;
				// Get User Wishlist
				const friendsCards = await axios(
					`http://127.0.0.1:5000/users/${friendsId}/wishlist`
				);
				setUserData((prev) => {
					return {
						...prev,
						friendViewing: {
							...prev.friendViewing,
							wishlist: friendsCards.data,
						},
					};
				});
			} catch (err) {
				console.error(err);
			}
		};

		fetchPost();

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
	const currentTab = userData.friendViewing.tab.toLowerCase();
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
				{userData.friendViewing.wishlist[currentTab].map((cat, i) => {
					return (
						<div key={i}>
							<CategoryCard data={cat} type="friend" />
						</div>
					);
				})}
			</div>
			<HolidaysNavbar />
			<Shortcuts back='/friends'/>
		</div>
	);
}
