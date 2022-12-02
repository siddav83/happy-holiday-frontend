import React from "react";
import data from "./data";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryList() {
    data.map((cat) => {
        return <CategoryCard data={data} />;
    });
}
