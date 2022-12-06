import { useState } from 'react'
import './style.css'

export default function Button({children, colour}){
    return (
        <button className={`btn-${colour}`}>
            {children}
        </button>
    )
}