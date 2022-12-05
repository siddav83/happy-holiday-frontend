import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./main.css";
// Context
import { UserProvider } from "./Context/UserContext";
import { CalenderProvider } from "./Context/CalenderContext";
import { StatsProvider } from "./Context/StatsContext";
import { FestivityProvider } from "./Context/FestivityContext";
import { CategoryProvider } from "./Context/CategoryContext";
import { ToggleProvider } from "./Context/ToggleContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ToggleProvider>
			<UserProvider>
				<FestivityProvider>
					<CalenderProvider>
						<StatsProvider>
							<CategoryProvider>
								<Router>
									<App />
								</Router>
							</CategoryProvider>
						</StatsProvider>
					</CalenderProvider>
				</FestivityProvider>
			</UserProvider>
		</ToggleProvider>
	</React.StrictMode>
);
