import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
  const handleSignOut = () => {
    localStorage.removeItem('token');
    
    window.location.href = '/';
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="#" className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars"></i>
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
