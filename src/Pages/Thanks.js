import React from 'react';
import womanOnPhone from '../Images/thanksImg.png';
import blu from '../Images/bluCircle.png';
import brown from '../Images/brownCircle.png';
import fadeBlu from '../Images/fadeBlu.png';
import fadeBrown from '../Images/fadeBrown.png';
import fadePurple from '../Images/fadePurple.png';

function Thanks() {
  return (
    <div className='pt-20'>
        <div className='w-fit m-auto'>
            <img className='w-72' src={womanOnPhone} alt='delivery' />
        </div>
        <div className='text-center text-xl md:text-2xl mt-4'>Hey Celestina, thank you for your purchase</div>
        <div className='text-zinc-600 text-center mt-3'>You are amazing, Cheers to being <span className='text-blue-400'>ARTSY!</span></div>

        <img src={blu} alt='blu' className='absolute -left-16 -top-24 z-50 hidden lg:block' />
        <img src={brown} alt='brown' className='absolute -left-24 -top-28 z-50 hidden lg:block' />

        <img src={fadeBlu} alt='fade' className='block absolute left-0 top-0 -z-20 md:hidden' />
        <img src={fadePurple} alt='fade' className='block absolute right-10 top-16 -z-20 md:hidden' />
        <img src={fadeBrown} alt='fade' className='block absolute right-5 top-72 -z-20 md:hidden' />
    </div>
  )
}

export default Thanks