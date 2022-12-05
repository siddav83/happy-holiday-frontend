import React, { useEffect, useState } from "react";
import "./style.css";
import { Profile, AddNav } from "../../Components";
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
		<div className='main-container Community'>
			<div>
				<div>Community</div>
				<div>
					<a href='#popular' onClick={switchTab} name='Popular' className={`${activeTab === 'Popular' ? 'active' : ''}`}>Popular</a>
					<a href='#forum' onClick={switchTab} name='Forum' className={`${activeTab === 'Forum' ? 'active' : ''}`}>Forum</a>
				</div>
			</div>
			<div className='tab-container'>
				<div className='tab' id='popular'>
					<h1>Popular</h1>
				</div>
				<div className='tab' id='forum'>
					<h1>Forum</h1>
				</div>
			</div>
		</div>
	);
};

export default Community;
