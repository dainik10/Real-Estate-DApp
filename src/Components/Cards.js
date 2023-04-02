import React, { useState } from 'react';
import Estates from "../services/Estates.js";

const Cards = () => {

    const [propertyData, setPropertyData] = useState(Estates)
    console.log(propertyData);

    return (
        <>
            {
                propertyData.map((curElem) => {
                    return (
                        <div className="col mt-5 mb-lg-4" key={curElem.id}>
                            <div className="card shadow-sm inv0">
                                <img src={curElem.image} className="card-img-top img-fluid" alt='img' />
                                <div className="card-body">
                                    <div className='d-flex mt-2'>
                                        <div className='inv-name ms-2 pb-5'>
                                            <div className='inv-sec d-flex text-success fw-medium justify-content-center align-items-center mb-3'>{curElem.PName}</div>
                                            <p className='h6 mb-lg-1 mb-sm-3 mt-1 ms-2'>{curElem.OName}</p>
                                        </div>
                                    </div>

                                    <div className='text-muted mt-3 ms-2'>
                                        {curElem.Address}
                                    </div>
                                    <div className='text-muted mt-3 ms-2'>
                                        {curElem.Desc}
                                    </div>

                                    <div className='inv-divi mt-4'></div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <div className='inv-per d-flex justify-content-center align-items-center'>
                                            <p className='text-success fs-5 fw-semibold mb-0 ms-0 mt-0'>{curElem.Price}</p>
                                        </div>
                                        <button className='border border-success-subtle border-2 rounded d-flex align-items-center justify-content-center inv3 fw-semibold buy'>
                                            <i className="fa-regular fa-circle-check me-2"></i> Buy Property
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )


                }
                )
            }

        </>
    )
}

export default Cards