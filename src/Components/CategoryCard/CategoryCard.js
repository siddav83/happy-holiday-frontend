import React, { useContext } from "react";
import "./style.css";
import CategoryData from "../../Data/CategoryData";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

export default function CategoryCard({ data }) {
	const { userData, setUserData } = useContext(UserContext);
	const emoji = CategoryData.filter((cat) => cat.name === data.category)[0];

	const deleteCategory = async (e) => {
		const deleteItem = e.target.textContent.slice(2);
		console.log(deleteItem);
		const updateTab = userData.tab.toLowerCase();
		// Delete
		axios.delete(`http://127.0.0.1:5000/${updateTab}/${data.id}`);
		// Update State
		setUserData((prev) => {
			const removeItem = prev.wishlist[updateTab].filter(
				(item) => item.category !== deleteItem
			);
			return {
				...prev,
				wishlist: { ...prev.wishlist, [updateTab]: removeItem },
			};
		});
	};

	return (
		<div className="card" onClick={deleteCategory}>
			<p className="symbols">{emoji?.symbols}</p>
			<p>{data.item ? data.item : data.category}</p>
		</div>
	);
}
