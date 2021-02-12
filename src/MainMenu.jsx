import '../node_modules/materialize-css/dist/css/materialize.min.css';
import React from "react";
import { Link, NavLink } from 'react-router-dom';

const MainMenu = ()=> (
    <nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink exact to="/" activeClassName="active">Inicio</NavLink></li>
                <li><NavLink to="/viajes"  activeClassName="active">Viajes</NavLink></li>  
                <li><NavLink to="/formulario"  activeClassName="active">Formulario</NavLink></li> 
            </ul>
        </div>
    </nav>
)

export default MainMenu