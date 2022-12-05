import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User, Tab, Holidays } from "./Pages";
import { TabNav, CategoryCard, AddNav } from "./Components";
import Background from "./assets/images/background.webp";
import Snowflake from "./assets/images/snowflake.png";
import "./app.css";
function App() {
    return (
        <div className="App">
            {/* <img className="background" src={Background} alt="snowfall" /> */}
            {/* Snowflakes START*/}
            <img src={Snowflake} alt="snowflake" className="snowflake s-1" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-2" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-3" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-4" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-5" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-6" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-7" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-8" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-9" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-10" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-11" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-12" />
            <img src={Snowflake} alt="snowflake" className="snowflake s-13" />

            {/* Snowflakes END*/}
            <Routes>
                {/* Pages */}
                <Route path="/" element={<Home />} />
                <Route
                    path="/user"
                    element={
                        <>
                            <User />
                        </>
                    }
                />
                <Route
                    path="/tab"
                    element={
                        <>
                            <Tab />
                        </>
                    }
                />
                <Route path="/holidays" element={<Holidays />} />
            </Routes>
        </div>
    );
}

export default App;
