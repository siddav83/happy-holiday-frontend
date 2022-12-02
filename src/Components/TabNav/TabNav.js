import React from "react";
import "./style.css";

const TabNav = () => {
    return (
        <nav className="tabnav-navbar">
            <button>
                <i className="fa-regular fa-thumbs-up"></i>
            </button>
            <button>
                <i className="fa-regular fa-thumbs-down"></i>
            </button>
            <button>
                <i className="fa-regular fa-star"></i>
            </button>
            <button>
                <i className="fa-solid fa-face-grin-hearts"></i>
            </button>
        </nav>
    );
};

export default TabNav;
