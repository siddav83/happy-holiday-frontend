import React from "react";
import "./style.css";
import CategoryData from "../../Data/CategoryData";

export default function CategoryCard({ data, index }) {
	const emoji = CategoryData.filter((cat) => cat.name === data.category)[0];
	return (
		<div className="card" key={index}>
			<p className="symbols">{emoji.symbols}</p>
			<p>{data.item}</p>
		</div>
	);
}
