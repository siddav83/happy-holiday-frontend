import { useState } from 'react'
import './style.css'

export default function Button({children, colour, click}){
    return (
        <button className={`btn-${colour}`} onClick={click}>
            {children}
        </button>
    )
}