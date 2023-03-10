import {Link} from 'react-router-dom'
import caja from '../assets/img/logo.png';
const NavbarLogout = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
            <div className="container px-5">
            <Link className="navbar-brand" to='/'><img src={caja} alt="logo" height="40px"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to='/'>Inicio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/login'>Cerrar sesión</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavbarLogout