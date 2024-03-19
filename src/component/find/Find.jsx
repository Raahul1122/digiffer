import React from 'react';
import './find.scss';

export const Find = () => {
  const cardData = [
    {
      title: 'News',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
      image:'/assets/image 43.png'
    },
    {
        title: 'Learning Academy (courses)',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
        image:'/assets/image 43 (1).png'
      },
      {
        title: 'Careers',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
        image:'/assets/image 43 (2).png'
      },
   
  ];

  return (
    <div className='find-wrappper'>
      <div className='find-container container'>
        <div className='row'>
          <h1 className='custom-heading-class text-center pb-1 '>Find out more about blockchain</h1>
          <p className='text-center pb-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
          {cardData.map((card, index) => (
            <div key={index} className='col-lg-4 col-md-6 mb-4 '>
              <div className='find-card'>
                <img src={card.image} alt="" className='img-fluid card-image' />
                <div className='px-3 py-2'>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <a href="/#">See our articles<img src="/assets/cta-link-chevron-right.png" className='img-fluid' alt="" /></a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
