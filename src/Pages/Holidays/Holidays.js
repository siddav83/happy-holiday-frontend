import React from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";

const Holidays = () => {
    return (
        <>
            <div className="main-container">
                <h1 className="holidays-heading">Happy Holidays!</h1>
                <Countdown />
                <FunFact />
            </div>
            <HolidaysNavbar />
        </>
    );
};

export default Holidays;
