import React from "react";
import "./style.css";

export default function CategoryCard({ data, index }) {
    return (
        <div className="card" key={index}>
            <p className="symbols">{data.symbols}</p>
            <p>{data.name}</p>
        </div>
    );
}
