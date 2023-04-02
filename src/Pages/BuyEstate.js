import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const BuyEstate = () => {
    return (
        <>
            <Navbar />
            <div className='container mt-lg-5 mt-3'>
                <div
                    className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 inv">
                    <div className="col mb-2 ps-4 d-flex flex-column position-static">
                        <div className='h1 head'>
                        Buy Properties<br /><Link to='#' className='invest-head-comp'>Without any headache </Link>
                        </div>
                        <div className='h6 sub-head mt-2'>
                            Browse latest Estates
                        </div>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 ms-lg-5 ms-sm-2">
                    <Cards />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default BuyEstate