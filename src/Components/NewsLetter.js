import React from 'react';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';

function NewsLetter() {
  return (
    <div className='w-full overflow-x-hidden pb-5'>
        <div>
            <div className='flex flex-col items-start mb-3 ml-3 sm:items-center sm:h-52 sm:m-6 sm:border-2 pt-6'>
                <h3 className='text-2xl mb-1 sm:mb-4'>NEWSLETTER</h3>
                <p className='mb-4 sm:mb-7'>{`Subscribe to get daily updates on new drops ${'&'} exciting deals`}</p>
                <div className='flex w-full sm:w-fit flex-col sm:flex-row'>
                    <input className='border-2 px-3 h-12 mr-6 w-9/12 sm:w-72 mb-5 sm:mb-0' />
                    <button className='bg-black text-white w-40 h-12'>Subscribe</button>
                </div>
            </div>


            <footer>
              <div className='flex items-center mt-7 pl-5 sm:pl-10 sm:pr-10 md:pl-20 md:pr-20 lg:pl-48 lg:pr-40'>
                <div className='text-3xl hidden sm:block'>ARTSY.</div>
                <div className='sm:flex sm:h-40 md:w-9/12 lg:w-8/12 sm:justify-between sm:ml-auto'>
                  <ul className='sm:flex sm:flex-col sm:justify-between hidden sm:block'>
                    <li>Home</li>
                    <li>Marketplace</li>
                    <li>Auctions</li>
                    <li>Drops</li>
                  </ul>

                  <ul className='sm:flex sm:flex-col sm:justify-between hidden sm:block'>
                    <li>Blog</li>
                    <li>Wallets</li>
                    <li>Rates</li>
                    <li>High bids</li>
                  </ul>

                  <ul>
                    <li className='text-lg mb-4 sm:hidden'>REACH US</li>
                    <li className='flex items-center mb-5'><i className='text-2xl'><AiOutlineMail /></i> <span className='ml-2'>artsystudios@gmail.com</span></li>
                    <li className='flex items-center'><i className='text-2xl'><GoLocation /></i><span className='ml-2'> Lagos, Nigeria</span></li>
                  </ul>
                </div>
              </div>
              <div className='hidden text-center mt-5 sm:block'>Artsystudios &copy; 2022. All Rights Reserved.</div>
            </footer>
        </div>
    </div>
  )
}

export default NewsLetter