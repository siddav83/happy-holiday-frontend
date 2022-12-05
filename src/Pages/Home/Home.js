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
		icon: '🎄'
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
		// <div className="main-container Home">
		<div className="Home">
			<header>
				<span className='logo'>Happy Holidays!</span>
				<button><i className='menu-icon'></i></button>
			</header>

			<main>
				<div className="heading">
					<h2>Celebrate {nextEvent?.icon} <span className='eventName'>{nextEvent ? nextEvent.name : 'holidays'}</span> with friends and family!</h2>
				</div>
				<div className='card-default'>
					<div className='countdown'>
						<div className='counter'>{countdown}</div>
						<div className='text'>days until {nextEvent.name}</div>
					</div>
					<p><a href="#">Hosting an event?</a></p>
				</div>
				<div className='card-default'>
					<h2>My Wishlist</h2>
					<div className='list'>
					{
						loggedIn ? <>Nothing in your wishlist. <a href="#">Add items</a></> : <><a href="#" onClick={() => setDisplayModal('Login')}>Sign in to create a wishlist.</a></>
					}
					</div>
				</div>
				<div className='card-default'>
					<h2>Popular Gifts</h2>
					<div className='list'>
						{
							new Array(6).fill().map((item, index) => <div key={index} className='placeholder'></div>)
						}
					</div>
				</div>
				<div className='card-default'>
					<h2>{nextEvent.name} Cards</h2>
					<div className='list'>
						{
							new Array(6).fill().map((item, index) => <div key={index} className='placeholder'></div>)
						}
					</div>
				</div>
			</main>

			<div className='navbar-default'>
				{
					loggedIn ?
					<div>
						<button>Home</button>
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
