import React from "react";
import "./style.css";
import CategoryData from "../../Data/CategoryData";

export default function CategoryCard({ data }) {
    const emoji = CategoryData.filter((cat) => cat.name === data.category)[0];

    // const emoji = CategoryData.map((cat) => cat);
    // console.log(data);
    return (
        <div className="card">
            <p className="symbols">{emoji?.symbols}</p>
            <p>{data.item ? data.item : data.category}</p>
        </div>
    );
}
