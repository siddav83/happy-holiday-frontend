import React from "react";
import CategoryData from "../../Data/CategoryData";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryList() {
    CategoryData.map((cat) => {
        console.log(cat);
        return (
            <div className="card-container">
                <CategoryCard data={cat} />
            </div>
        );
    });
}
