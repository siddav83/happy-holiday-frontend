import React, { useEffect, useState } from "react";
import { Modal } from "../../Components";
import "./style.css";

const msToDays = 1000 * 60 * 60 * 24

const Home = () => {
	const [loggedIn, setLoggedIn] = useState(null)
	const [nextEvent, setNextEvent] = useState({
		name: 'Christmas',
		date: new Date(2022, 11, 25)
	})
	const [countdown, setCountdown] = useState(null)
	const countdownLimit = 99
	const [displayModal, setDisplayModal] = useState(null)
	
	function daysLeft(target){
		const timeLeft = target.getTime() - new Date().getTime()
		return Math.ceil(timeLeft / msToDays)
	}

	function closeModal(){
		setDisplayModal(null)
	}

	useEffect(() => {
		setCountdown(daysLeft(nextEvent.date))
	}, [nextEvent])

	return <div className="Home">
		<h1>Happy Holidays!</h1>

		{
			displayModal === 'Login' && <Modal show={true} close={closeModal}>
				<h1>Test Modal</h1>
				<p>This is a test modal</p>
			</Modal>
		}

		{
			countdown < countdownLimit && <>
				<h2>{countdown}</h2>
				<p>days until {nextEvent.name}</p>
			</>
		}

		{
			!loggedIn && <button onClick={() => setDisplayModal('Login')}>Login or sign up</button>
		}
	</div>;
};

export default Home;
