import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-maroon" 
   >
  <div className="container-fluid">
    <Link className="navbar-brand mx-4" to="/"><strong>RAPIDCARE</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" style={{fontSize:'Large'}}>
        <Link style={{color:'white'}} className="nav-link " aria-current="page" to="/">Home</Link>
        <Link style={{color:'white'}}className="nav-link" to="/about">About Us</Link>
      
      
      </div>
      <form class="d-flex ms-auto" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <Link to='/login' class="btn btn-outline-light mx-2"  role="button">Login</Link>
        <Link to='/signup' class="btn btn-outline-light" role="button">Signup</Link>
        <Link to='/cart' className="btn btn-outline-light mx-2" ><i className='fa-solid fa-bed'><FontAwesomeIcon icon={faBed}/></i></Link>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar
