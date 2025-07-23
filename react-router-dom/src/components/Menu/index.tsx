import '.style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><Link to='/post'>Post</Link></li>
            </ul>
        </nav>
    )
}