import React from 'react'
import MarketLeft from '../Components/MarketLeft'
import MarketMain from '../Components/MarketMain'

function MarketPlace({setCurrentItem}) {
  return (
    <div className='flex pt-28 pb-10 px-5 lg:px-16'>
        <MarketLeft />
        <MarketMain 
          setCurrentItem={setCurrentItem}
        />
    </div>
  )
}

export default MarketPlace