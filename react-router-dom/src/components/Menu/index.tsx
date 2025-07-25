import '.style.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li><Link to='/' state={'This os state from HOME'}>Home</Link></li>
                <li><a href="/about">About</a></li>
                <li><Link to='/post'>Post</Link></li>
                <li><Link to='/post/10'>Posts 10</Link></li>
                <li>
                    <Link to='/redirect'>Redirect</Link>
                </li>
            </ul>
        </nav>
    )
}