import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {


    const navigation = useNavigate()
    const handleLogout = () => {
      navigation('/login', {replace:true})
    }
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          HeroesApp
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link" + (isActive ? " active" : "")
              }
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link" + (isActive ? " active" : "")
              }
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link" + (isActive ? " active" : "")
              }
              to="/search" 
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Logout
            </button>
            <span className="nav-item nav-link text-info">Federico</span>
          </ul>
        </div>
      </nav>
    );
}