import React, { useContext } from 'react'
import menu from '../Assets/MENU.svg'
import { Link, NavLink } from 'react-router-dom';

import logo from '../Assets/Logo.png'
import { ContractContext } from '../context/ContractContext';

const Navbar = () => {

    const { account, connectWallet } = useContext(ContractContext)

    return (
        <div className="container mt-0">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-3 mt-2" to="/"><img src={logo} className='logo' alt='' /></NavLink >
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link px-3" aria-current="page" to="/buy">Buy Property</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <NavLink className="nav-link link px-3" aria-current="page" to="/sell">Sell Property</NavLink >
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link link px-3" aria-current="page" href="#footer">Contact Us</a >
                            </li>
                            <div className="d-flex">
                                <button className={account ? `btn btn-outline-primary btn-lg user-select-none` : `btn btn-outline-primary btn-lg`} onClick={account ? e => e.preventDefault() : connectWallet}>{account ? account.slice(0, 5) + '.......' + account.slice(-1) : 'Connect'}</button>
                            </div>
                        </ul>
                    </div>
                    <div className='d-md-none d-lg-none d-block'>
                        <a className="navbar-brand" href="#footer"><img src={menu} className='menu' alt='Shayar' /></a >
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;