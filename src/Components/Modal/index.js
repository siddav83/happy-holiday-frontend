import { useEffect, useState } from 'react'
import './style.css'

export default function Modal({children, show, close}){
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(show)
    }, [show])

    // useEffect(() => {
    //     close()
    // }, [isVisible])

    function closeModal(){
        setIsVisible(false)
        close()
    }

    return (
        <div className={`Modal ${!isVisible && 'hidden'}`}>
            <button onClick={closeModal}>X</button>
            <div className='content'>{children}</div>
        </div>
    )
}