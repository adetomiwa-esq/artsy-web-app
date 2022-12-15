import React from 'react';
import MarketImg from './MarketImg';
import MarketBox from './MarketBox';

function MarketMain({setCurrentItem}) {
  const marketImages = MarketImg
  return (
    <div className='border w-full ml-6'>
      <div className='flex'>
        <div> See 1-6 of 15 results</div>
        <select className='ml-auto'>
          <option>Sort by</option>
        </select>
      </div>

      <div className='w-full'>
        <div className='flex flex-wrap m-auto w-full'>
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
    </div>
  )
}

export default MarketMain