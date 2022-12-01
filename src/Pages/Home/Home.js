import React, { useEffect, useState } from "react";
import "./style.css";

const msToDays = 1000 * 60 * 60 * 24

const Home = () => {
	const [loggedIn, setLoggedIn] = useState(null)
	const [nextEvent, setNextEvent] = useState({
		name: 'Christmas',
		date: new Date(2022, 11, 25)
	})
	const [counter, setCounter] = useState(null)
	const counterLimit = 99
	
	function daysLeft(target){
		const timeLeft = target.getTime() - new Date().getTime()
		return Math.ceil(timeLeft / msToDays)
	}

	useEffect(() => {
		setCounter(daysLeft(nextEvent.date))
	}, [nextEvent])

	return <div>
		<h1>Happy Holidays!</h1>

		{
			counter < counterLimit && <>
				<h2>{counter}</h2>
				<p>days until {nextEvent.name}</p>
			</>
		}

		{
			!loggedIn && <button>Login or sign up</button>
		}
	</div>;
};

export default Home;
