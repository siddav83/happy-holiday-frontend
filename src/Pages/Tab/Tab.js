import React from "react";
import { TabNav, CategoryCard, AddNav } from "../../Components";
import "./style.css";

export default function Tab() {
    return (
        <div className="tab-container">
            <h1>Tab Page</h1>
            <div className="tab-nav-container">
                <TabNav />
            </div>
            <div className="card-container">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
            <AddNav />
        </div>
    );
}
