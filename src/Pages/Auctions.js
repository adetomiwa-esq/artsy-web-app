import React from 'react';
import Image1 from '../Images/auction1.png';
import Image2 from '../Images/auction2.png';
import Image3 from '../Images/auction3.png';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import topBid1 from '../Images/bt-auction1.png';
import topBid2 from '../Images/bt-auction2.png';

function Auctions() {
    const auction = [
        {imgSrc:Image1, hr: '6hr', min: '40mins', sec: '15secs', id: 1},
        {imgSrc:Image2, hr: '6hr', min: '40mins', sec: '15secs', id: 2},
        {imgSrc:Image3, hr: '6hr', min: '40mins', sec: '15secs', id: 3},
    ]

    const topBids = [
        {imgSrc: topBid1, fav: true, title: 'Out of the box', creator: 'Dan Murray', Date: '12/01/23', highestBid: '0.57ETH', currentBid: '0.987ETH'},
        {imgSrc: topBid2, fav: false, title: 'Falling apart', creator: 'Jacob Banks', Date: '17/01/23', highestBid: '0.34ETH', currentBid: '0.99ETH'},
    ]

  return (
    <div className='pt-24 px-6 pb-10 lg:px-10 text-zinc-600'>
        <div className='mb-3 lg:mb-10 ml-6 lg:ml-8'>Home/<span className='text-black font-semibold'>Auctions</span></div>
        <h6 className='mb-3 lg:mb-10 text-black font-semibold ml-6 lg:ml-8'>Here's an overview of products on aution, explore!</h6>
        <div className='flex overflow-x-scroll'>
            {
                auction.map((item) => { 
                   return <div className='relative ml-4 min-w-max sm:w-96 group h-52' key={item.id}>
                        <img className='w-72 h-full sm:w-96 brightness-50 sm:brightness-100 group-hover:brightness-50' src={item.imgSrc} alt='img' />
                        <div className='flex absolute text-white bottom-3 left-1/2 -translate-x-1/2 border text-2xl lg:text-3xl w-10/12 justify-center bg-transparent'>
                            <div className='mr-2'>{item.hr}:</div>
                            <div className='mr-2'>{item.min}:</div>
                            <div>{item.sec}</div>
                        </div>
                        <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 text-white items-center text-sm md:text-lg sm:hidden sm:group-hover:flex'>
                            <div className='mr-2'>Join livestream</div>
                            <Link to='/liveAuction' className='p-2 border rounded-full'><BsArrowRight /></Link>
                        </div>
                    </div>
                })
            }
        </div>

        <div>
            <div className='my-6 text-lg ml-3 text-black font-semibold'>Top bids from popular creators</div>
            <div className='flex flex-col lg:flex-row'>
                {
                    topBids.map((item, index) => {
                        return <div className='w-full mb-8 lg:mb-0 lg:w-6/12 lg:mx-5' key={index}>
                            <div className='border mb-5 rounded-lg'>
                                <img className='w-full h-60' src={item.imgSrc}  alt='img'/>
                                <div className='text-2xl ml-8 my-3 font-bold text-black'>{item.title}</div>
                            </div>

                            <div className='pl-3 h-24 flex flex-col justify-between'>
                                <div><span className='mr-8'>Creator:</span><span className='text-black'>{item.creator}</span></div>
                                <div><span className='mr-12'>Date:</span><span className='text-black'>{item.Date}</span></div>
                                <div><span className='mr-1'>Highest bid:</span><span className='text-black'>{item.highestBid}</span></div>
                            </div>

                            <div className='flex px-3 h-20 py-2 bg-zinc-200 mt-5'>
                                <div className='flex flex-col justify-between'>
                                    <div>Current bid</div>
                                    <div className='text-black'>{item.currentBid}</div>
                                </div>

                                <button className='bg-blue-600 text-white h-10 w-7/12 self-center ml-auto'>Place bid</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Auctions