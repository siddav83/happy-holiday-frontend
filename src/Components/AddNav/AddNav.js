import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryContext";
import "./style.css";

const AddNav = () => {
    const { visible, setVisible } = useContext(CategoryContext);

    const handleEvent = (e) => {
        e.preventDefault();
        setVisible(!visible);
        console.log(visible);
    };
    return (
        <nav className="holidays-navbar">
            {/* Swirly Pattern START */}
            <svg
                preserveAspectRatio="xMidYMax meet"
                className="svg-separator sep3"
                viewBox="0 0 1600 100"
                style={{ display: "block" }}
                data-height="100"
            >
                <path
                    style={{ opacity: 1, fill: "#ee7179" }}
                    d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"
                ></path>
                <path
                    style={{ opacity: 1, fill: "#f17e86" }}
                    d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
                ></path>
                <path
                    style={{ fill: "#fa5252" }}
                    d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
                ></path>
            </svg>
            {/* Swirly Pattern END */}

            <NavLink to="/">
                <i className="fa-solid fa-right-from-bracket"></i>
            </NavLink>
            <NavLink to="/community">
                <i className="fa-solid fa-earth-europe"></i>
            </NavLink>
            <button className="add-btn" onClick={handleEvent}>
                <i className="fa-regular fa-plus btn-big"></i>
            </button>
            <NavLink to="/holidays">
                <i className="fa-regular fa-calendar"></i>
            </NavLink>
            <NavLink to="/friends">
                <i className="fa-solid fa-user-group"></i>
            </NavLink>
        </nav>
    );
};

export default AddNav;
