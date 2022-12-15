import React from 'react'
import MarketLeft from '../Components/MarketLeft'
import MarketMain from '../Components/MarketMain'

function MarketPlace({setCurrentItem}) {
  return (
    <div className='flex pt-28 px-16'>
        <MarketLeft />
        <MarketMain 
          setCurrentItem={setCurrentItem}
        />
    </div>
  )
}

export default MarketPlace