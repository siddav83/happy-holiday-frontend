import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToggleContext } from '../../Context/ToggleContext'
import './style.css'

const Waves = () => 
<svg
    preserveAspectRatio="xMidYMax meet"
    className="svg-separator sep3"
    viewBox="0 0 1600 100"
    style={{ display: "block" }}
    data-height="100"
>
    <path
        style={{ opacity: 1, fill: "#ee7179" }}
        d="M-40,71.627C20.307,71.627,20.058,32,80,32s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,26H-60V72L-40,71.627z"
    ></path>
    <path
        style={{ opacity: 1, fill: "#f17e86" }}
        d="M-40,83.627C20.307,83.627,20.058,44,80,44s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,14H-60V84L-40,83.627z"
    ></path>
    <path
        style={{ fill: "#fa5252" }}
        d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"
    ></path>
</svg>

export default function Shortcuts({children, type, back, scrollable}){
	const { setToggleDay, setCalendarToggle, setToggleAddFriend } = useContext(ToggleContext)
    const navigate = useNavigate()

	function toggleAllFalse(){
		setToggleDay(false);
		setCalendarToggle(false);
		setToggleAddFriend(false);
	}

    const links = [
        // {
        //     name: 'Back',
        //     url: '/',
        //     tooltip: '&larr; Go back',
        //     class: 'fa-solid fa-right-from-bracket',
        //     click: back
        // },
        {
            name: 'Holidays',
            url: '/holidays',
            tooltip: 'Holidays',
            class: 'fa-regular fa-calendar',
            click: toggleAllFalse
        },
        // {
        //     name: 'Community',
        //     url: '/community',
        //     tooltip: 'Community',
        //     class: 'fa-solid fa-earth-europe',
        //     click: toggleAllFalse
        // },
        {
            name: 'Events',
            url: '/events',
            tooltip: 'Events',
            class: 'fa-solid fa-champagne-glasses',
            click: toggleAllFalse
        },
        {
            name: 'Friends',
            url: '/friends',
            tooltip: 'Friends',
            class: 'fa-solid fa-user-group',
            click: toggleAllFalse
        }
    ]

    return (
        <div className={`Shortcuts ${scrollable ? 'scrollable' : ''} ${type === 'fade' ? 'fade' : 'red'}`}>
            {
                type !== 'fade' && <Waves/>
            }
            {
                children ? null : <a><i className='fa-solid fa-right-from-bracket' onClick={back ? () => navigate(back) : toggleAllFalse} title='Go back'></i></a>
            }
            {
                children || links.map(link => <NavLink key={link.name} to={link.url}><i className={link.class} onClick={link.click} title={link.tooltip}></i></NavLink>)
            }
        </div>
    )
}