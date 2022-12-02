import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./main.css";
// Context
import { UserProvider } from "./Context/UserContext";
import { CalenderProvider } from "./Context/CalenderContext";
import { StatsProvider } from "./Context/StatsContext";
import { FestivityProvider } from "./Context/FestivityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserProvider>
			<FestivityProvider>
				<CalenderProvider>
					<StatsProvider>
						<Router>
							<App />
						</Router>
					</StatsProvider>
				</CalenderProvider>
			</FestivityProvider>
		</UserProvider>
	</React.StrictMode>
);
