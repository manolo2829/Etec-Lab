import React,{useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

const Menu = () => {

    const auth = getAuth()
    const [userFirebase, setUserFirebase] = useState(null)

    const AuthUser = async() =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user;
          console.log(uid)
          console.log('hay una sesion')
          // ...
        } else {
          // User is signed out
          // ...
          console.log('no hay una sesion')
        }
      });
    }

    const UserLogOut = () =>{
      signOut(auth).then(() => {
        console.log('sesion cerrada')
      }).catch((error) => { 
        console.log(error)
      });
    }

    useEffect(() => {
      AuthUser()
    }, [])

    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-lg">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to='/' className='nav-link'>Inicio</NavLink>
                <NavLink to='/reserve' className='nav-link'>Laboratorios</NavLink>
                <NavLink to='/login' className='nav-link'>User</NavLink>
              </div>
              <span className="navbar-text dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  a
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item tex" href="#"  onClick={(e) => {UserLogOut()}} >CERRAR SESION</a></li>
                </ul>
              </span>
            </div>
          </div>
        </nav>
      </header>
    );
}
  
export default Menu;