import React, { useEffect, useState } from "react";
import "./style.css";
import { Profile, AddNav, Layout, HolidaysNavbar } from "../../Components";
import { useNavigate } from "react-router-dom";

const Community = () => {
	const [activeTab, setActiveTab] = useState('Popular')
	// const navigate = useNavigate()

	// useEffect(() => {
	// 	const hash = window.location.hash
	// 	navigate(hash)
	// }, [])

	function switchTab(e){
		setActiveTab(e.target.name)
	}

	return (
		<Layout>
			<div className='Community'>
				<header>
					<h1>Community</h1>
					<div>
						<a href='#popular' onClick={switchTab} name='Popular' className={`${activeTab === 'Popular' ? 'active' : ''}`}>Popular</a>
						<a href='#forum' onClick={switchTab} name='Forum' className={`${activeTab === 'Forum' ? 'active' : ''}`}>Forum</a>
					</div>
				</header>
				<main className='tab-container'>
					<div className='tab' id='popular'>
						<h2>Popular</h2>
					</div>
					<div className='tab' id='forum'>
						<h2>Forum</h2>
					</div>
				</main>
				<HolidaysNavbar/>
			</div>
		</Layout>
	);
};

export default Community;
