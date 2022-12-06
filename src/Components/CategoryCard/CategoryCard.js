import React from "react";
import "./style.css";
import CategoryData from "../../Data/CategoryData";

export default function CategoryCard({ data }) {
	const emoji = CategoryData.filter((cat) => cat.name === data.category)[0];

	return (
		<div className="card">
			<p className="symbols">{emoji.symbols}</p>
			<p>{data.item}</p>
		</div>
	);
}
