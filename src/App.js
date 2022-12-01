import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User, Tab } from "./Pages";
import { Navbar, TabNav, CategoryCard, AddNav } from "./Components";
function App() {
    return (
        <div className="App">
            <Routes>
                {/* Pages */}
                <Route path="/" element={<Home />} />
                <Route
                    path="/User"
                    element={
                        <>
                            <User />
                            <Navbar />
                        </>
                    }
                />
                <Route
                    path="/Tab"
                    element={
                        <>
                            <Tab />
                            <TabNav />
                            <CategoryCard />
                            <AddNav />
                            <Navbar />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
