import React, { useContext } from "react";
import "./style.css";
import { Countdown, HolidaysNavbar, FunFact } from "../../Components";
import { Calender } from "../../Components";
import { CalenderContext } from "../../Context/CalenderContext";

const Holidays = () => {
    const { calenderToggle, setCalenderToggle } = useContext(CalenderContext);

    const toggleCalender = () => {
        setCalenderToggle((prev) => !prev);
    };
    console.log(calenderToggle);

    return (
        <>
            <div className="main-container">
                <h1>Happy Holidays!</h1>
                {!calenderToggle ? (
                    <>
                        <Countdown />
                        <FunFact />
                        <button
                            className="calender-btn"
                            onClick={toggleCalender}
                        >
                            Calender
                        </button>
                    </>
                ) : (
                    <Calender setCalenderToggle={setCalenderToggle} />
                )}
            </div>
            <HolidaysNavbar />
        </>
    );
};

export default Holidays;
