import React from 'react';
import './banner.scss';
import Button from '../Button';

const Banner = () => {
    // Array of image file names
    const imageNames = ['ayera.png', 'tremorz.svg', 'bitlyra.svg','cryptocurrency australia.svg','Group.png'];

    return (
        <>
            <div className='banner-wrapper'>
                <div className='banner-content'>
                    <div className='banner-text-wrapper'>
                        <h1>Transform your <br/>
                            <span>business through</span> blockchain <br/> expertise</h1>
                        <p>Partner with us to develop a solution, end-to-end.</p>
                        <div className='d-flex justify-content-center ' >
                       <Button text="View our services" style={{alignItem:"start"}}/> 

                        </div>
                    </div>
                </div>
            </div>

            <div className='logo-image-list px-4 '>
                <div className='logo-images'>
                    {imageNames.map((imageName, index) => (
                        <img key={index} src={`/assets/${imageName}`} alt={`Image ${index + 1}`} className='img-fluid'/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Banner;
