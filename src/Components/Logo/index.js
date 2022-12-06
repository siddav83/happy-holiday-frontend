import { useState } from 'react'
import './style.css'

export default function Logo(){
    const [type, setType] = useState('sm')
    const text = 'Happy Holidays!'

    switch(type){
        case 'sm':
            return <div className='logo-sm'>{text}</div>
    }
}