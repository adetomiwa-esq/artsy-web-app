import React from 'react';
import homeImg1 from '../Images/homeImg1.png';
import homeImg2 from '../Images/homeImg2.png';
import homeImg3 from '../Images/homeImg3.png';
import homeImg4 from '../Images/homeImg4.png';
import homeImg6 from '../Images/homeImg6.png';

function HomeCarousel() {
  return (
    <div>
        <div className='flex flex-col w-10/12 lg:w-6/12 m-auto my-5 md:w-6/12'>
            <h1 className='font-bold text-3xl text-center md:text-left md:text-5xl mb-9' style={{lineHeight: '3.7rem'}}>
                Photography is poetry {`&`} beautiful untold stories
            </h1>
            <p className='leading-7 md:text-xl text-center md:text-left'>
                Flip through more than 10,000 vintage shots, old Photographs, historic images and captures seamlessly in one place. Register to get top access.
            </p>
        </div>

        <div className='w-4/6 m-auto md:flex md:w-full md:overflow-x-scroll relative md:static h-64 md:h-72 lg:h-80 my-12'>
          <img className='absolute h-full w-full top-0 rotate-0 bottom-0 md:rotate-0 md:static md:w-1/4 md:h-3/6 self-center md:mx-2 md:mt-10' src={homeImg1} alt='img'/>
          <img className='absolute h-full w-full top-0 rotate-2 bottom-0 md:rotate-0 md:static md:w-1/4 md:h-4/5 self-end md:mx-2' src={homeImg2} alt='img'/>
          <img className='absolute h-full w-full top-0 rotate-6 bottom-0 md:rotate-0 md:static md:w-1/4 md:h-5/6 md:mx-2' src={homeImg3} alt='img'/>
          <img className='absolute h-full w-full top-0 rotate-12 bottom-0 md:rotate-0 md:static md:w-1/4 md:h-4/5 self-end md:mx-2' src={homeImg4} alt='img'/>
          <img className='absolute h-full w-full top-0 rotate-0 bottom-0 md:rotate-0 md:static md:w-1/4 md:h-3/6 self-center md:mx-2 md:mt-10' src={homeImg6} alt='img'/>
        </div>
    </div>
  )
}

export default HomeCarousel