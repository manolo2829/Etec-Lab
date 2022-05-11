import React from 'react'
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to='/' className='nav-link'>Inicio</NavLink>
                <NavLink to='/reserve' className='nav-link'>Laboratorios</NavLink>
                <NavLink to='/login' className='nav-link'>User</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
}
  
export default Menu;