import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'

function CartItem({ imgSrc, price, quantity, id, itemName, total, setTotal, item, setCartItems }) {
  console.log(total)
  const subtractTotal = () => {
    setTotal(total - price)
    setCartItems((prevValue) => prevValue.filter((cartItem) => cartItem.id !== item.id))
  }
  return (
    <div className='py-5 border-b'>
      <div className='flex h-36'>
        <div className='flex'>
          <div className='w-36 h-36'><img className='w-full h-full' src={imgSrc} alt='img'/></div>
          <div className='flex flex-col justify-between ml-6'>
            <div>{itemName}</div>
            <div>Clearance</div>
            <div>size: 200ft</div>
            <div>{quantity}</div>
          </div>
        </div>

        <div className='ml-auto flex flex-col justify-between'>
          <div className='border h-7 w-7 rounded-full cursor-pointer flex ml-auto' onClick={subtractTotal}><i className='m-auto block'><AiOutlineClose /></i></div>
          <div>${price}</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem