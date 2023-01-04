import React from 'react';
import Image1 from '../Images/liveBidBg.png';
import { AiOutlineClose, AiOutlineEye } from 'react-icons/ai';
import { FiSend, FiArrowRight } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import LiveChat from '../Components/LiveChat';
import { Link } from 'react-router-dom';

function LiveAuction() {
  return (
    <div className='pt-16 md:px-16 lg:px-44 h-screen md:h-screen lg:max-h-screen'>
      <div className='text-zinc-500 mb-4 hidden md:block'>Home/Auctions/<span className='text-black'>Live bid</span></div>
      <div className='relative md:static md:border border-black flex h-full md:h-fit lg:h-5/6'>
        <div className='w-full md:w-6/12 relative max-h-full'>
            <img className='w-full h-full' src={Image1} alt='live-auction' />
            <div className='absolute text-white right-3 top-3 md:w-full flex md:px-5 items-center'>
                <Link to='/auctions' className='text-3xl bg-zinc-300 rounded-full cursor-pointer hidden md:block'><AiOutlineClose /></Link>
                <button className='md:ml-auto bg-blue-800 md:bg-blue-500 py-1 px-2 md:px-7 text-md md:text-sm rounded-md md:rounded-2xl'>LIVE</button>
                <button className='flex md:hidden px-2 py-1 rounded-md ml-2 bg-zinc-300 text-white items-center'><i className='mr-1 text-xl'><AiOutlineEye /></i> <span>295</span></button>
                <Link to='/auctions' className='block md:hidden ml-4 text-2xl'><AiOutlineClose /></Link>
            </div>
            <h2 className='absolute w-full text-center top-1/2 -translate-y-1/2 text-white text-3xl'>Current bid $4500</h2>
            <p className='absolute top-3 md:top-auto md:bottom-7 left-5 text-white'>Tag: Lost or Wither</p>
        </div>


        <div className='absolute w-full bottom-1 h-2/6 md:h-auto md:static md:w-6/12 pl-2 md:min-h-full text-white md:text-black'>
          <div className='h-5/6 overflow-y-scroll md:h-3/4 lg:h-4/5 flex flex-col justify-between text-xs'>
            {
              LiveChat.map((eachBid, index) => {
                return <div className='flex mb-7 md:mb-2 lg:mb-0' key={index}>
                  <img className='w-10 md:w-7 lg:w-9' src={eachBid.imgSrc} alt='chat' />
                  <div className='ml-1 flex flex-col justify-between'>
                    <div className=' md:text-zinc-700'>{eachBid.name}</div>
                    <div>{eachBid.action}</div>
                  </div>
                </div>
              })
            }
          </div>

          <div className='text-white md:text-zinc-500 my-1 md:my-3 text-lg hidden md:block'>Creator: Stormi Rylie</div>

          <div className='flex items-center md:mb-4'>
            <div className='relative w-9/12'>
              <input
                type='input'
                placeholder='Place a bid...'
                className='border w-full h-8 pl-2 pr-5 rounded-lg outline-none text-black'
              />
              <i className='absolute right-1 top-1/2 -translate-y-1/2 text-black'><FiSend /></i>
            </div>

            <div className='text-red-600 ml-auto text-xl border p-1 rounded-full border-white md:border-black mr-3'><FaHeart /></div>
          </div>
        </div>
      </div>

      <div className='hidden md:flex text-2xl mt-2 text-zinc-600'><div>See upcoming drops</div> <Link to='/drop' className='border p-1 rounded-full block ml-3'><FiArrowRight /></Link></div>
    </div>
  )
}

export default LiveAuction