import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function MarketBox({img, productName, price, setCurrentItem}) {

  const navigate = useNavigate();

  function replaceCurrentItem(){
    setCurrentItem({
      itemName: productName,
      imgSrc: img
    })

    navigate('/editorials')
  }
  return (
      <Link to='/editorials' onClick={replaceCurrentItem} className='w-4/12 pl-3 mb-5'>
        <div className='w-11/12'><img className='w-full' src={img} alt='' /></div>
        <div className='text-neutral-600 text-xs'>{productName}</div>
        <div>{`$${price}`}</div>
      </Link>
  )
}

export default MarketBox