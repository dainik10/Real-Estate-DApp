import React from 'react'
import Navbar from '../Components/Navbar'
import Eth from '../Assets/Eth.png'
import Solidity from '../Assets/Solidity.png'
import ReactLogo from '../Assets/ReactLogo.png'
import BC from '../Assets/BC.png'
import homepageimg from '../Assets/homepageimg.png'
import Boxes from '../Components/Boxes'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='mt-lg-5 mt-3 d-flex flex-wrap position-relative'>

        <div
          className="container ms-lg-5 ms-2 ps-lg-4 row g-0 overflow-hidden flex-md-row mb-5 h-md-250 position-relative w-100 home">
          <div className="col mb-2 ps-4 d-flex flex-column position-static">
            <div className='h1 head'>Start buying<br />Online Real-Estate<br /> with <Link to='#' className='head-comp'>Crypocurrency</Link>
            </div>
            <div className='h6 sub-head mt-2'>Providing Platform for all kind of buying and selling<br /> of real estate
            </div>
            <div className='mt-3'>
              <Link className='btn btn-primary btn-lg scr-btn' to='/buy'>Buy Now <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>

          <div className='col-auto d-lg-block'>
            <img src={homepageimg} alt="img" className='first_img img-fluid' />
          </div>
        </div>



        {/* MEDIA */}

        <div className='container rounded-5 md mt-5 pt-lg-5'>
          <div>
            <p className='text-center h1 div-head'>Technologies</p>
            <p className='text-center sub-head'>Today's new technologies are going to bring revolution in upcoming era</p>
          </div>

          <div className='mt-5 py-lg-5 med'>
            <img src={BC} alt="img" className='media-1 mb-3' />
            <img src={Eth} alt="img" className='media mb-3' />
            <img src={ReactLogo} alt="img" className='media-1 mb-3' />
            <img src={Solidity} alt="img" className='media mb-3' />
          </div>
        </div>

        {/* BOXES */}
        <div className='container-fluid mt-5'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-lg-5 pb-4 ms-sm-2'>

            <Boxes />
            <Boxes />
            <Boxes />

          </div>
          <div className='d-flex justify-content-center'>
            <Link className='btn btn-primary btn-lg scr-btn px-lg-5'>Connect Wallet</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home