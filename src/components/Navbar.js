import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand nav-link" href="/">App</Link>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                   <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link">Cart</Link>
                                </li>
                            </ul>
                    </nav>
                </div>
        )
    }
}