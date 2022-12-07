import { useState } from 'react'
import './style.css'

export default function Logo(){
    const [type, setType] = useState(null)
    const text = 'Happy Holidays!'

    switch(type){
        case 'sm':
            return <div className='logo-sm'>{text}</div>
        default:
            return <h1 className='logo'>{text}</h1>
    }
}