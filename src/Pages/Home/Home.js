import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	Card,
	Countdown,
	Layout,
	Logo,
	Modal,
	Button,
	Navbar,
	Shortcuts,
	Content,
	Form,
} from "../../Components";
import "./style.css";
import { UserContext } from "../../Context/UserContext";
import TopDeals from "../../Data/TopDeals";

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
	const [topDeals, setTopDeals] = useState([])

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
		// User Login
		axios
			.post("http://127.0.0.1:5000/login", formData)
			.then((res) => {
				if (res.status === 201) {
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
		// Get User Username
		axios.get("http://127.0.0.1:5000/users")
			.then((res) => {
				const foundUser = res.data.filter(
					(user) => user.email === formData.email
				)[0];
				setUserData((prev) => {
					return { ...prev, username: foundUser?.username };
				});
			})
			.catch(err => console.error(err));
	}

	function submitRegister(e) {
		e.preventDefault();
		const formData = getFormData(e.target);

		axios
			.post("http://127.0.0.1:5000/register", formData)
			.then((res) => {
				if (res.status === 201) {
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
	}

	useEffect(() => {
		const hash = window.location.hash.split("#")[1];

		if (hash) {
			setDisplayModal(hash.toLowerCase());
		}

		axios.get('http://localhost:3002/compare/items/top-deals')
			.then(res => setTopDeals(res.data))
			.catch(err => {
				console.error(err)
				console.log(TopDeals);
				setTopDeals(TopDeals)
			})
	}, []);

	useEffect(() => {
		setCountdown(daysLeft(nextEvent.date));
	}, [nextEvent]);

	return (
		<div className={`Home ${displayModal ? "no-overflow" : ""}`}>
			<Navbar>
				<Button colour="dark" click={() => setDisplayModal("login")}>
					Login or sign up
				</Button>
			</Navbar>
			<Content>
				<main>
					<div className="heading">
						<h2 className="tagline">
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
						<h2>Top 10 Deals</h2>
						<div className="list">
							{
								new Array(10).fill().map((item, index) => (topDeals.length > index ? <a key={index} href={topDeals[index].link} target='_blank'><div className='list-item'>
									<img src={topDeals[index].img} alt={topDeals[index].title}/>
									<span>{index + 1}. {topDeals[index].title}</span>
								</div></a> : null))
							}
						</div>
					</Card>
					{/* <Card>
						<h2>Community Posts</h2>
						<div className="list">
							{new Array(6).fill().map((item, index) => (
								<div key={index} className="placeholder"></div>
							))}
						</div>
					</Card> */}
				</main>
			</Content>
			<Shortcuts type='fade'>
				{loggedIn ? (
					<p>
						Not {loggedIn.email}?{" "}
						<a href="#" onClick={logout}>
							Log out
						</a>
					</p>
				) : (
					<Button colour="dark" click={() => setDisplayModal("login")}>
						Login or sign up
					</Button>
				)}
			</Shortcuts>

			{displayModal === "login" && (
				<Modal show={true} close={closeModal}>
					<h2>Login</h2>
					<Form submit={submitLogin}>
						<label htmlFor="email">Email{" "}</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							required
						></input>
						
						<label htmlFor="password">Password{" "}</label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							required
						></input>
						<input type="submit" value="Login"></input>
					</Form>
					{output && <p className="alert">{output}</p>}
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setDisplayModal("register");
						}}
					>
						Create a new account
					</a>
					<br/>
					<a href="#" onClick={e => {e.preventDefault()}}>Reset password</a>
				</Modal>
			)}

			{displayModal === "register" && (
				<Modal show={true} close={closeModal}>
					<h2>Register</h2>
					<Form submit={submitRegister}>
						<label htmlFor="email">Email{" "}</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							required
						></input>

						<label htmlFor="username">Username{" "}</label>
						<input
							id="username"
							type="text"
							name="username"
							placeholder="Username"
							required
						></input>

						<label htmlFor="password1">Password{" "}</label>
						<input
							id="password1"
							type="password"
							name="password1"
							placeholder="Password"
							required
						></input>

						<label htmlFor="password2">Confirm password{" "}</label>
						<input
							id="password2"
							type="password"
							name="password2"
							placeholder="Confirm password"
							required
						></input>

						<input type="submit" value="Register"></input>
					</Form>
					<a
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setDisplayModal("login");
						}}
					>
						Already have an account?
					</a>
				</Modal>
			)}
		</div>
	);
};

export default Home;
