import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, User, Tab, Holidays } from "./Pages";
import {
    HolidaysNavbar,
    HolidaysNavbarAdd,
    TabNav,
    CategoryCard,
    Countdown,
} from "./Components";
function App() {
    return (
        <div className="App">
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
                <Route
                    path="/holidays"
                    element={
                        <>
                            <Holidays />
                            <HolidaysNavbar />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
