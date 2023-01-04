import React from 'react';
import upcoming from '../Images/upcomingAuc.png';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function UpcomigAuctions() {
  return (
    <div>
        <div className='w-full border px-9 py-4 text-white' style={{backgroundImage: 'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9,0.49)111.62%)'}}>
            <h6 className='text-xl hidden sm:block sm:text-2xl'>
                See Upcoming Auctions and Exhibitions
            </h6>
            <div className='h-1 ml-2 mt-3 mb-3 rounded bg-white hidden sm:block' style={{width:'25rem'}}></div>
            <div className='text-white flex py-6 px-1 sm:px-4 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${upcoming})`, minHeight: '384px'}}>
                <div className='self-end flex-col sm:flex-row flex'>
                    <div className='flex sm:w-7/12'>
                        <div className='self-center text-3xl'>01</div>
                        <div className='bg-white w-8 h-8 mt-2 mr-1' style={{borderRadius: '50%', minWidth: '10px', height: '10px'}}></div>
                        <div>
                            <h3 className='text-2xl sm:text-2xl sm:w-7/12'>MONALISA REDEFINED IN STYLE.</h3>
                            <p>START ON: 08:00 GTS. MONDAY</p>
                            <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE GLOBE BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                        </div>
                    </div>

                    <div className='mt-5 sm:mt-0 ml-auto self-end flex'>
                        <div className='mr-5 self-center'>
                            <p className='cursor-pointer'>See more</p>
                            <div className='rounded-md bg-white h-1 w-full'></div>
                        </div>

                        <button className='cursor-pointer border py-2 px-3 rounded-md hover:bg-white hover:text-black'>Set a reminder</button>
                    </div>
                </div>
            </div>


            <div className='flex items-center mt-5'>
                <div className='w-48 rounded-md bg-gray-400 h-2'>
                    <div className='h-full w-3/12 rounded-md bg-white'></div>
                </div>
                <div className='ml-auto flex'>
                    <i className='border mr-3 p-4 rounded-full cursor-pointer'><AiOutlineLeft /></i>
                    <i className='border p-4 rounded-full cursor-pointer'><AiOutlineRight /></i>
                </div>
            </div>
        </div>

        <div className='mt-20 mb-20'>
            <Link to='/marketplace' className='flex items-center justify-between text-2xl sm:text-4xl border-t-4 px-7'>
                <div>Explore marketplace</div>
                <i className='text-5xl text-blue-500 sm:text-7xl'><FiArrowRight /></i>
            </Link>

            <Link to='/auctions' className='flex items-center justify-between text-2xl sm:text-4xl border-t-4 border-b-4 px-7'>
                <div>See auctions</div>
                <i className='text-5xl text-blue-500 sm:text-7xl'><FiArrowRight /></i>
            </Link>
        </div>

    </div>
  )
}

export default UpcomigAuctions