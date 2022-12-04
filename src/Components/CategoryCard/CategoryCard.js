import React from "react";
import "./style.css";

export default function CategoryCard({ data }) {
    return (
        <div className="card">
            <p className="symbols">{data.symbols}</p>
            <p>{data.name}</p>
        </div>
    );
}
