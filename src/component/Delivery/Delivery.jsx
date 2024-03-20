import React from 'react'
import './delivery.scss'
function Delivery() {
    const deliveryData = [
        {
            id: 1,
            icon: '/assets/iteration 1.png',
            title: 'Process-based outcomes',
            description: 'Our tried-and-tested methodology identifies key opportunities in your processes to deliver the maximum return on investment',
        },
        {
            id: 2,
            icon: '/assets/factory 1.png',
            title: 'Tailored to your industry',
            description: 'With our global network of partners and affiliated, we work with you to increase efficiency and profits.',
        },
        {
            id: 3,
            icon: '/assets/brainstorming 1.png',
            title: 'Dedicated consultant',
            description: 'Backed by our global network of partners, our consultancy team will identify the most profitable opportunities and build a plan to act on them.',
        },
    ];

    return (
        <>
          <div className="delivery-wrapper">
            <div className='container delivery-container' >
                <div className='row'>
                    <div className='col-lg-6 col-md-6 '>
                        <div className='delivery-left-section'>
                            <h1>Delivering business <span>outcomes through cutting</span> -edge technology</h1>
                            <p>Right now, visionary companies are coming together to transform the way their industries work with the help of Blockchain Australia Solutions. </p>
                            <p>From a food supply that’s becoming safer, smarter and more profitable to supply chains freeing themselves from legacy processes and paperwork, we are leading the business world into a new era of collaboration and innovation.</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                        {deliveryData.map((item) => (

                            <div key={item.id} className="delivery-right-section">
                                <div className="icon-img">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="text-box">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Delivery