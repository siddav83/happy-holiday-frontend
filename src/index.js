import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./main.css";
import App from "./App";
import { UserProvider } from "./Context/UserContext";
import { CalenderProvider } from "./Context/CalenderContext";
import { StatsProvider } from "./Context/StatsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserProvider>
			<CalenderProvider>
				<StatsProvider>
					<Router>
						<App />
					</Router>
				</StatsProvider>
			</CalenderProvider>
		</UserProvider>
	</React.StrictMode>
);
