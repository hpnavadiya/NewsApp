import React, { Component } from 'react'
import { Link } from 'react-router-dom';
  
const NavBar = () => {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/"></Link>General</li>
                                <li className="nav-item"><Link className="nav-link" to="/business"></Link>Business </li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment"></Link>Entertainment</li>
                                <li className="nav-item"><Link className="nav-link" to="/health"></Link>Health</li>
                                <li className="nav-item"><Link className="nav-link" to="/science"></Link>Science</li>
                                <li className="nav-item"><Link className="nav-link" to="/sports"></Link>Sports</li>
                                <li className="nav-item"><Link className="nav-link" to="/technology"></Link>Technology</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default NavBar
