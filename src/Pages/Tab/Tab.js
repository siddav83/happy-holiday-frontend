import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { TabNav, AddNav, CategoryCard } from "../../Components";
import "./style.css";

export default function Tab(data) {
	const { category } = useContext(CategoryContext);
	return (
		<div>
			<h1>Wants</h1>
			<TabNav />
			<div className="card-container ">
				{category.map((cat) => {
					return (
						<div className="">
							<CategoryCard data={cat} />
						</div>
					);
				})}
			</div>
			<AddNav />
		</div>
	);
}
