import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User, Tab, Holidays } from "./Pages";
import { TabNav, CategoryCard, AddNav } from "./Components";
import Background from "./assets/images/background.webp";
function App() {
	return (
		<div className="App">
			<img className="background" src={Background} alt="snowfall" />
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
							<TabNav />
							<CategoryCard />
							<AddNav />
						</>
					}
				/>
				<Route path="/holidays" element={<Holidays />} />
			</Routes>
		</div>
	);
}

export default App;
