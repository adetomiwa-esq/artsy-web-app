import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function MarketBox({img, productName, price, setCurrentItem}) {

  const navigate = useNavigate();

  function replaceCurrentItem(){
    setCurrentItem({
      itemName: productName,
      imgSrc: img,
      price: price
    })

    navigate('/editorials')
  }
  return (
      <Link to='/editorials' onClick={replaceCurrentItem} className='w-full sm:w-4/12 sm:max-h-72 pl-3 mb-5 bg-white'>
        <div className='w-11/12 max-h-60'><img className='w-full h-60' src={img} alt='' /></div>
        <div className='flex flex-row items-center sm:items-start sm:flex-col mr-7'>
          <div className='text-neutral-600 text-xs'>{productName}</div>
          <div className='ml-auto sm:ml-0'>{`$${price}`}</div>
        </div>
      </Link>
  )
}

export default MarketBox