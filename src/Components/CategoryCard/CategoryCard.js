import React, { useContext, useState } from "react";
import "./style.css";
import CategoryData from "../../Data/CategoryData";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { FestivityContext } from "../../Context/FestivityContext";

export default function CategoryCard({ data, type }) {
	const { darkMode } = useContext(FestivityContext);
	const { userData, setUserData } = useContext(UserContext);
	const emoji = CategoryData.filter((cat) => cat.name === data.category)[0];
	const [compareToggle, setCompareToggle] = useState(false);
	const [loading, setLoading] = useState(true);
	const [priceData, setPriceData] = useState([]);

	const deleteCategory = async (e) => {
		const deleteItem = e.target.textContent.slice(2);
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

	const priceComparison = async (e) => {
		const compareItem = e.target.textContent.slice(2).toLowerCase();
		console.log(compareItem);
		// Show modal
		setCompareToggle(true);
		// Get Backend data
		const response = await axios.get(
			`http://localhost:3002/compare/${compareItem}`
		);
		setPriceData(response.data);
		setLoading(false);
	};

	return (
		<>
			<div
				className={darkMode ? "card-dark" : "card"}
				onClick={type === "user" ? deleteCategory : priceComparison}
			>
				<p className="symbols">{emoji?.symbols}</p>
				<p>{data.item ? data.item : data.category}</p>
			</div>
			{compareToggle && (
				<div className="modal-outer">
					<div className="modal-inner">
						<i
							className="fa-solid fa-circle-xmark"
							onClick={() => setCompareToggle(false)}
						/>
						<div className="price-items-container">
							{loading ? (
								<img
									src="https://media.tenor.com/VVDjzhoCQEUAAAAi/christmas-loading.gif"
									alt="loading"
								/>
							) : (
								priceData.map((item) => {
									return (
										<div className="price-item">
											<img src={item.img} alt="price compared item" />
											<div className="price-details">
												<a href={item.link}>View Now</a>
												<p>{item.title}</p>
												<p>{item.price}</p>
											</div>
										</div>
									);
								})
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
