import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import sellimg from '../Assets/sellimage.png'

const SellEstate = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-lg-5 mt-3'>
        <div
          className="row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 raise">
          <div className="col mb-2 ps-4 d-flex flex-column position-static">
            <div className='h1 head'>Owners sell your<br />Estate<br /><Link to='#' className='raise-head-comp'>With zero paper work<br /></Link>
            </div>
            <div className='h6 sub-head mt-2'>Sell your properties and Estates Online<br />With new and secured technologies.
            </div>
          </div>

          <div className='col-auto d-lg-block'>
            <img src={sellimg} alt="img" className='raise_img img-fluid' />
          </div>
        </div>

        <form>
          <div className='h3'>AB DAINIK YAHA SE FORM BANA AGAR JARURAT PADI TO<br />MEKO PATA NHI AGE KYA KARNA H ISILIYE CHODD DIYA <br />AB YAHA SE TU BANA LE JAISE SAHI LAGE</div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default SellEstate