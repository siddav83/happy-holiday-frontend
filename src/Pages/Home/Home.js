import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Countdown, Layout, Logo, Modal, Button, Navbar, Shortcuts, Content } from "../../Components";
import "./style.css";
import { UserContext } from "../../Context/UserContext";

const msToDays = 1000 * 60 * 60 * 24;
const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

const Home = () => {
	const navigate = useNavigate();
	const { userData, setUserData } = useContext(UserContext);
	const [loggedIn, setLoggedIn] = useState(null);
	const [nextEvent, setNextEvent] = useState({
		name: "Christmas",
		date: new Date(2022, 11, 25),
		icon: "🎄",
	});
	const [countdown, setCountdown] = useState(null);
	const countdownLimit = 99;
	const [displayModal, setDisplayModal] = useState(null);
	const [showSideMenu, setShowSideMenu] = useState(false);
	const [output, setOutput] = useState("");

	function daysLeft(target) {
		const timeLeft = target.getTime() - new Date().getTime();
		return Math.ceil(timeLeft / msToDays);
	}

	function closeModal() {
		setDisplayModal(null);
	}

	function submitLogin(e) {
		e.preventDefault();
		const formData = getFormData(e.target);
		console.log(formData, "LOGIN");

		axios
			.post("http://127.0.0.1:5000/login", formData)
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.status === 201) {
					console.log("LOGIN AS", formData["email"]);
					setLoggedIn(formData);
					closeModal();
					setUserData((prev) => {
						return { ...prev, email: formData.email, id: res.data.id };
					});
					// Redirect
					navigate("/holidays");
				} else {
					console.log("FAILED");
				}
			})
			.catch((err) => {
				console.error(err);
				setOutput("Incorrect email or password");
			});
	}

	function submitRegister(e) {
		e.preventDefault();
		const formData = getFormData(e.target);
		console.log(formData, "REGISTER");

		axios
			.post("http://127.0.0.1:5000/register", formData)
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.status === 201) {
					console.log("REGISTERED");
					closeModal();
				} else {
					console.log("FAILED");
				}
			})
			.catch((err) => console.error(err));
	}

	function logout(e) {
		e.preventDefault();
		setLoggedIn(null);
		console.log("LOGOUT");
	}

	useEffect(() => {
		setCountdown(daysLeft(nextEvent.date));
	}, [nextEvent]);

	useEffect(() => {
		console.log("UPDATE", loggedIn);
	}, [loggedIn]);

	return (
		<div className={`Home ${displayModal ? "no-overflow" : ""}`}>
			<Navbar/>
			<Content>
				<main>
					<div className="heading">
						<h2>
							Celebrate {nextEvent?.icon}{" "}
							<span className="eventName">
								{nextEvent ? nextEvent.name : "holidays"}
							</span>{" "}
							with friends and family!
						</h2>
					</div>
					{/* <Card>
						<div className="countdown">
							<div className="counter">{countdown}</div>
							<div className="text">days until {nextEvent.name}</div>
						</div>
					</Card> */}
					<Countdown />
					<Card>
						<h2>Popular Gifts</h2>
						<div className="list">
							{new Array(6).fill().map((item, index) => (
								<div key={index} className="placeholder"></div>
							))}
						</div>
					</Card>
					<Card>
						<h2>Community Posts</h2>
						<div className="list">
							{new Array(6).fill().map((item, index) => (
								<div key={index} className="placeholder"></div>
							))}
						</div>
					</Card>
				</main>
			</Content>
			<Shortcuts>
				{loggedIn ? (
					<p>
						Not {loggedIn.email}?{" "}
						<a href="#" onClick={logout}>
							Log out
						</a>
					</p>
				) : (
					<Button colour='dark' click={() => setDisplayModal("Login")}>Login or sign up</Button>
				)}
			</Shortcuts>

			{displayModal === "Login" && (
				<Modal show={true} close={closeModal}>
					<h2>Login</h2>
					<form onSubmit={submitLogin}>
						<label>
							Email{" "}
							<input
								type="email"
								name="email"
								placeholder="Email address"
								required
							></input>
						</label>
						<label>
							Password{" "}
							<input
								type="password"
								name="password"
								placeholder="Password"
								required
							></input>
						</label>
						<input type="submit" value="Login"></input>
					</form>
					{output && <p className="alert">{output}</p>}
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setDisplayModal("Register");
						}}
					>
						Register
					</a>
				</Modal>
			)}

			{displayModal === "Register" && (
				<Modal show={true} close={closeModal}>
					<h2>Register</h2>
					<form onSubmit={submitRegister}>
						<label>
							Email{" "}
							<input
								type="email"
								name="email"
								placeholder="Email address"
								required
							></input>
						</label>
						<label>
							Username{" "}
							<input
								type="text"
								name="username"
								placeholder="Username"
								required
							></input>
						</label>
						<label>
							Password{" "}
							<input
								type="password"
								name="password1"
								placeholder="Password"
								required
							></input>
						</label>
						<label>
							Confirm password{" "}
							<input
								type="password"
								name="password2"
								placeholder="Confirm password"
								required
							></input>
						</label>
						<input type="submit" value="Register"></input>
					</form>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setDisplayModal("Login");
						}}
					>
						Login
					</a>
				</Modal>
			)}
		</div>
	);
};

export default Home;
