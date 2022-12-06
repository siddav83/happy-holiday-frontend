import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import { TabNav, AddNav, CategoryCard, AddCategory } from "../../Components";
import "./style.css";
import axios from "axios";

export default function Tab() {
	const [friendData, setFriendData] = useState();

	const { categoryData, visible, setVisible } = useContext(CategoryContext);

	const { userData, setUserData } = useContext(UserContext);
	console.log(userData);

	useEffect(() => {
		// ! Get Friends Data (API)
		axios
			.get(`http://127.0.0.1:5000/users/${userData.id}/wants`)
			.then((res) => {
				const data = res.data;
				setFriendData(data);

				console.log(data);
			});
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

	return (
		<div className="main-container">
			<h1>{userData.friendViewing && userData.friendViewing} Wants</h1>
			{visible ? (
				<div className="like-dislike-container">
					<AddCategory />
				</div>
			) : (
				visible
			)}
			<TabNav />
			<div className="card-container">
				{friendData?.map((card, i) => {
					return (
						<div className="">
							<CategoryCard data={card} index={i} />
						</div>
					);
				})}
			</div>
			<AddNav />
		</div>
	);
}
