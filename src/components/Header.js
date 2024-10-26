import logo from '../assets/LOGO.png'
import {NavLink} from 'react-router-dom'
import '../style/style.css' 

function Header() {
    return (
        <div className='HeaderFlex'>
            <img src={logo} alt='kasa' />
            <nav>
            <NavLink to="/"  className={({ isActive }) => isActive ? "current-page link-page" : "link-page"}>Accueil</NavLink>
            <NavLink to="/A-propos" className={({ isActive }) => isActive ? "current-page link-page" : "link-page"}>A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header