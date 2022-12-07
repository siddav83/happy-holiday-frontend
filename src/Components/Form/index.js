import './style.css'

export default function Form({children, submit}){
    return (
        <form className='Form' onSubmit={submit}>
            {children}
        </form>
    )
}