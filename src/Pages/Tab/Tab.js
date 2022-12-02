import React from "react";
import {
    TabNav,
    AddNav,
    HolidaysNavbarAdd,
    CategoryList,
} from "../../Components";
import "./style.css";

export default function Tab() {
    return (
        <div className="tab-container">
            <h1>Heading - Want, Dislike, Love </h1>
            <TabNav />
            <CategoryList />
            <HolidaysNavbarAdd />
            <div className="card-container"></div>
        </div>
    );
}
