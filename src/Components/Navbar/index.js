import Button from '../Button'
import Logo from '../Logo'
import './style.css'

export default function Navbar({children}){
    return (
        <div className='Navbar'>
            <Logo/>
            <div className='Navlinks'>
                {children}
            </div>
        </div>
    )
}