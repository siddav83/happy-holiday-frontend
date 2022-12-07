import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { UserContext } from "../../Context/UserContext";
import { TabNav, AddNav, CategoryCard, AddCategory } from "../../Components";
import "./style.css";
import axios from "axios";

export default function Tab(data) {
	const { categoryData, visible, setVisible } = useContext(CategoryContext);
	const { userData, setUserData } = useContext(UserContext);

	
	const handleEvent = (e) => {
		e.preventDefault();
		setVisible(!visible);
	};

	useEffect(() => {
		// ! Get Friends Data (API)
		axios
			.get(`http://127.0.0.1:5000/users/${userData.id}/wants`)
			.then((res) => {
				const data = res.data;
				setUserData((prev) => {
					return { ...prev, wants: data };
				});
			});
	}, []);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		const type = e.target.type.value;
		const category = e.target.category.value;
		const item = e.target.item.value;

		const obj = {
			category,
			item,
		};
		setUserData((prev) => {
			return { ...prev, [type]: [...prev[type], { obj }] };
		});
		// !

		setVisible(visible);
	};

	return (
		<div className="main-container">
			<h1>Wants</h1>
			{visible ? (
				<div className="like-dislike-container">
					<AddCategory />
				</div>
			) : (
				visible
			)}
			<TabNav type="user" />
			<div className="card-container">
				{userData.wants.map((cat, i) => {
					return (
						<div key={i}>
							<CategoryCard data={cat} />
						</div>
					);
				})}
			</div>
			<AddNav click={handleEvent} />
		</div>
	);
}
