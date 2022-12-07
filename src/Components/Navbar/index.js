import Button from '../Button'
import Logo from '../Logo'
import './style.css'

export default function Navbar(){
    return (
        <div className='Navbar'>
            <Logo/>
            <div className='Navlinks'>
                <Button colour='dark'>Login or sign up</Button>
            </div>
        </div>
    )
}