import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../img/agencia-viajes-md-travel-logotipo.png'

const MainMenu = () => (
    <nav>
        <div className="row nav-wrapper  cyan darken-3">
            <Link to="/" className="brand-logo col s1 ">
                <img className="max-width: cover" src={Logo} alt="logo empresa" />
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/viajes" activeClassName="active">Viajes</NavLink></li>
                <li><NavLink to="/formulario" activeClassName="active">Formulario</NavLink></li>
                <li><NavLink to="/usuarios" activeClassName="active">Usuarios</NavLink></li>
            </ul>
        </div>
    </nav>
)

export default MainMenu