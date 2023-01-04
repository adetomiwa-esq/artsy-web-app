import React from 'react';
import DropBox from '../Components/DropBox';
import NewDrops from '../Components/NewDrops';
import NewsLetter from '../Components/NewsLetter';

function Drops() {
  return (
    <div className='pt-20 px-5 md:px-10 lg:px-20 text-zinc-500'>
        <div className='mb-8'>Home /Auctions/ Live bid/ <span className='text-black'>Drop</span></div>
        <div className='flex flex-col items-center h-32 justify-between mb-5'>
            <h1 className='text-black text-4xl'>Upcoming drops</h1>
            <p className='text-center sm:text-left'>Turn on notifications so that no drops will miss you.</p>
            <button className='border py-2 rounded-md w-48 text-black hover:text-white hover:bg-blue-600'>Notify me</button>
        </div>

        <div className='w-full'>
          {NewDrops.map((drop, index) => {
            return <DropBox 
              drop={drop}
              key={index}
            />
          })}
        </div>

        <div className='w-full mb-11'>
          <button className='w-44 rounded-md py-2 block  m-auto border'>See more</button>
        </div>

        <NewsLetter />
    </div>
  )
}

export default Drops