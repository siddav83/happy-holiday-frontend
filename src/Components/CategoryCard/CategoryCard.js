import React from "react";
import "./style.css";

export default function CategoryCard(data) {
    console.log(data);
    return <div className="card">{data[0]}</div>;
}
