import React from 'react'
import './category.scss'
import Button from '../Button'
const Category = () => {
  return (
    <>
    <div className="category-wrapper">

    <div className="container category-container" >
        <div className="row">
            <div className="col-lg-6">
                <div className='company-left'>
                    <img src="/assets/blockchain.png" alt="" className='img-fluid' />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="company-right">
                    <h1 className='custom-heading-class'>Our Company</h1>
                    <p className='custom-para-class'>At Blockchain Australia we are dedicated to the growing industry of Blockchain and pride ourselves as established technology leaders with a passion for delivering enterprise solutions that have the potential to transform businesses, industries, and our society as a whole. </p>
                    <p className='custom-para-class'>Our mission is to become leaders in the Australian Blockchain and cryptocurrency trading domain. We are eager to help businesses grow and we share a passion for coding, creating, and connecting people to the future of technology.</p>
                    <Button text="Find out more"/>
                </div>
            </div>
        </div>
    </div>
    </div>



    <div className="bluebg-section">
       <div className='bluebg-seciton-content'>
        <div className='container'>
            <div className="row align-items-center ">
                <div className="col-md-8">
                <h1>See how blockchain can work for your industry</h1>
                </div>
                <div className="col-md-4 mt-3 mt-md-0 ">
                <p>Our Consulting <img src="/assets/pink-chevron-right.png" alt="" /></p>
                </div>
      
       
       </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Category