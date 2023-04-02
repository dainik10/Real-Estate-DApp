import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/Logo.png'
const Footer = () => {
    return (
        <div className="container-fluid foot" id='footer'>

            <div className="container">
                <footer className="d-flex flex-column py-2 my-5 position-relative">

                    <div className='d-flex mb-4 f0'>

                        <div className="my-3">
                            <NavLink className='ms-4' to="/">
                                <img src={logo} className='logo' alt='' />
                            </NavLink>
                            <p className="text-muted ms-4 lh-lg foot-contact mt-2">CodeWarriors © 2022<br />All Rights Reserved</p>

                        </div>

                        <div className='d-flex mt-4 f1'>

                            <div className="mb-3 mx-5">
                                <h5 className='h5 foot-head mt-2'>Buyers</h5>
                                <ul className="nav flex-column mt-3">
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/buy">Buy</NavLink >
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3 mx-5">
                                <h5 className='h5 foot-head mt-2'>Owners</h5>
                                <ul className="nav flex-column mt-3">
                                    <li className="nav-item mb-2">
                                        <NavLink className="nav-link foot-link p-0 text-muted" to="/sell">Sell</NavLink >
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-3 ms-5 f2">
                                <h5 className='h5 foot-head mt-2'>Get In Touch</h5>
                                <p className='text-muted mt-3 lh-lg f2-txt'>Ouestions or Feedback<br />Ask Us Anything</p>
                                <ul className="nav flex-row text-sm-center text-lg-left f2-icons">
                                    <li className="nav-item mb-2 me-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 mx-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-facebook"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 mx-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-brands fa-square-instagram"></i></a >
                                    </li>
                                    <li className="nav-item mb-2 ms-2">
                                        <a className="ext-link" href="https://www.google.com/" target="_blank" rel='noreferrer'><i className="fa-solid fa-square-arrow-up-right"></i></a >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='border-top border-dark-subtle py-5'>
                        <p className='text-muted ms-4'>CodeWarriors are providing an online platform for purchase and sell of Real-Estate through Dapp. This Dapp will provide an easy and quick way to buy and sell Real-Estate which is a real headache in todays world, this will surely make people's life easy as well as secured as we are using Web 3.0 which is completely trusted because it is working on Ethereum blockchain and everything is secured by solidity Smart Contract.</p>
                        <p className='text-muted ms-4'>
                            Let's bring the revolution together.
                        </p>

                    </div>


                </footer>
            </div>
        </div>
    )
}

export default Footer