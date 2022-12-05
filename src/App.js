import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, User, Tab, Holidays, Friends } from "./Pages";
import Snowflake from "./Assets/images/snowflake.png";
import "./app.css";
function App() {
	return (
		<div className="App">
			{/* Snowflakes START*/}
            {
                new Array(12).fill().map((snowflake, index) => <img key={index} src={Snowflake} alt="snowflake" className={`snowflake s-${index + 1}`} />)
            }
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
				<Route path="/friends" element={<Friends />} />
			</Routes>
		</div>
	);
}

export default App;
