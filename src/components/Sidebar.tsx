import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <span className="brand-text font-weight-light">AdminPanel</span>
      </a>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <span className="d-block text-white">Naufal Fadhil Athallah</span>
          </div>
        </div>

        <nav className="mt-2 text-left">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="/profiles" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Profiles</p>
              </Link>
              <Link to="/divisions" className="nav-link">
                <i className="nav-icon fas fa-building"></i>
                <p>Division</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
