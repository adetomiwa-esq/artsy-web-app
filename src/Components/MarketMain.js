import React from 'react';
import MarketImg from './MarketImg';
import MarketBox from './MarketBox';

function MarketMain({setCurrentItem}) {
  const marketImages = MarketImg
  return (
    <div className='w-full ml-6'>
      <div className='flex items-center h-12 mb-6'>
        <div> See 1-6 of 15 results</div>
        <select className='ml-auto h-8 w-20'>
          <option>Sort by</option>
        </select>
      </div>

      <div className='w-full'>
        <div className='flex flex-col sm:flex-row sm:flex-wrap m-auto w-full'>
          {marketImages.map((item) => {
           return <MarketBox 
              img={item.imgSrc}
              productName={item.name}
              price={item.price}
              key={item.id}
              setCurrentItem={setCurrentItem}
            />
          })}
        </div>
      </div>

      <button className='border rounded-lg px-8 text-lg block m-auto mt-6 py-1'>See more</button>
    </div>
  )
}

export default MarketMain