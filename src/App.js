import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, User, Tab, Holidays } from "./Pages";
import { Navbar, TabNav, CategoryCard, AddNav } from "./Components";
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
							<Navbar />
						</>
					}
				/>
				<Route
					path="/tab"
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
				<Route
					path="/holidays"
					element={
						<>
							<Holidays />
							<Navbar />
						</>
					}
				/>
			</Routes>
		</div>
	);

}

export default App;
