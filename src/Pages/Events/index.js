import { Content, Navbar, Shortcuts } from '../../Components'
import './style.css'

export default function Events(){
    return (
        <div>
            <Navbar></Navbar>
            <Content>
                <h1>My Events</h1>
            </Content>
            <Shortcuts/>
        </div>
    )
}