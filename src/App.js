import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User } from "./Pages";
import { Navbar } from "./Components";
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
			</Routes>
		</div>
	);
}

export default App;
