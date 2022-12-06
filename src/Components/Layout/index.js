import './style.css'

export default function Layout({children, modal}){
    return (<div className='Layout'>
        {children}
        {
            modal && <div className='modal'></div>
        }
    </div>)
}