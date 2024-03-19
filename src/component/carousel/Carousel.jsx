import React,{useState} from 'react';
import Slider from "react-slick";
import './carousel.scss';

const Carousel = () => {
    const [activeCardId, setActiveCardId] = useState(3);
    const handleCardChange = (index) => {
        setActiveCardId(index + 1)
    };
    const settings = {
        dots: false,
        afterChange: handleCardChange,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: false,
        autoplaySpeed: 2000,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    
                }
            }
        ]
    };

    // Data for the slider boxes
    const sliderData = [
        {
            imgSrc: "/assets/client 1 (traced).png",
            title: "Consulting",
            description: "Lorem ipsum dolor sit amet consectetuer adisciping elit."
        },
        {
            imgSrc: "/assets/client 1 (traced).png",
            title: "Consulting",
            description: "Lorem ipsum dolor sit amet consectetuer adisciping elit."
        },
        {
            imgSrc: "/assets/client 1 (traced).png",
            title: "Consulting",
            description: "Lorem ipsum dolor sit amet consectetuer adisciping elit."
        },
        {
            imgSrc: "/assets/client 1 (traced).png",
            title: "Consulting",
            description: "Lorem ipsum dolor sit amet consectetuer adisciping elit."
        },
        {
            imgSrc: "/assets/client 1 (traced).png",
            title: "Consulting",
            description: "Lorem ipsum dolor sit amet consectetuer adisciping elit."
        },
        // Add more objects as needed for additional slider boxes
    ];

    return (
        <>
            <div className="slider-wrapper">
                <h1 className='custom-heading-class text-center '>What we offer</h1>
                <p className='custom-para-class text-center '>
                    We offer an end-to-end solution to bring your product to life, from gaining funding and creating a proof-of-concept to launch and beyond.
                </p>
                <div className='slider-content'>
                    <Slider {...settings}>
                        {sliderData.map((item, index) => (
                            <div>
                            <div key={index}  className={` slider-box ${index === activeCardId ? 'active' : ''}`}
                                onChange={() => handleCardChange(index)}>
                                <img src={item.imgSrc} alt="" className='img-fluid' />
                                <h1>{item.title}</h1>
                                <p className='text-center'>{item.description}</p>
                                <a href="/#">Find out more <img src="/assets/cta-link-chevron-right.png" className='img-fluid' alt="" /></a>
                            </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Carousel;
