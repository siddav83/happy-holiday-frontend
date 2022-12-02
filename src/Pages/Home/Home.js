import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "../../Components";
import "./style.css";

const msToDays = 1000 * 60 * 60 * 24;
const getFormData = (form) => Object.fromEntries(new FormData(form).entries());

const Home = () => {
	const [loggedIn, setLoggedIn] = useState(null);
	const [nextEvent, setNextEvent] = useState({
		name: "Christmas",
		date: new Date(2022, 11, 25),
	});
	const [countdown, setCountdown] = useState(null);
	const countdownLimit = 99;
	const [displayModal, setDisplayModal] = useState(null);

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
				console.log(res.data, "POST RESPONSE");
				if (res.data.message === "Logged In.") {
					console.log("LOGIN AS", formData["email"]);
					setLoggedIn(formData);
					closeModal();
				} else {
					console.log("FAILED");
				}
			})
			.catch((err) => console.error(err));
	}

	function submitRegister(e) {
		e.preventDefault();
		const formData = getFormData(e.target);
		console.log(formData, "REGISTER");

		axios
			.post("http://127.0.0.1:5000/register", formData)
			.then((res) => {
				console.log(res, "POST RESPONSE");
				if (res.data.message === "") {
					console.log("REGISTERED");
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

	return (
		<div className="main-container Home">
			<header>
				<h1>Happy Holidays!</h1>
				<p>Celebrate holidays and special moments with your friends and family! <a href="#">Share a new holiday event</a> or <a href="#">make your wishlist</a> now.</p>
			</header>

			<main>
				{
					countdown < countdownLimit && <div>
						<div>
							<h2>{countdown}</h2>
							<p>days until {nextEvent.name}</p>
						</div>
						<div>
							<h2>My Wishlist</h2>
							<div>
							{
								loggedIn ? <>Nothing in your wishlist. <a href="#">Add items</a></> : <><a href="#" onClick={() => setDisplayModal('Login')}>Sign in to create a wishlist.</a></>
							}
							</div>
						</div>
						<div>
							<h2>Custom gift ideas</h2>
							<div></div>
						</div>
						<div>
							<h2>Most popular gifts</h2>
							<div></div>
						</div>
					</div>
				}
			</main>
			<div>
				{
					loggedIn ?
					<div>
						<button>Home</button>
						<button>Dashboard</button>
						<button>Wishlist</button>
						<button>Friends</button>
						<button>Events</button>
						<button onClick={logout}>Logout</button>
					</div> : 
					<button onClick={() => setDisplayModal("Login")}>
						Login or sign up
					</button>
				}
			</div>

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
