import React from 'react';
import ShippingDetailsLeft from '../Components/ShippingDetailsLeft';
import CartItem from '../Components/CartItem';


function ShippingDetails({cartItems, setCartItems, setTotal, total}) {

  const shippingFee = 3

  return (
    <div className='pt-24 pb-10'>
      <ul className='hidden sm:flex justify-between w-9/12 md:w-7/12 lg:w-5/12 m-auto relative'>
            <li>
                <div>Shopping cart</div>
            </li>

            <li className='relative text-black'>
                <div>Shipping Details</div>
                <div className='absolute w-full h-1 bg-black -bottom-2 z-20'></div>
            </li>

            <li>
                <div>Payment Details</div>
            </li>
            <div className='absolute w-full h-1 bg-zinc-300 -bottom-2'></div>
        </ul>
        <div className='mx-5 lg:mx-10 mt-6 flex'>

          <ShippingDetailsLeft 
            cartItems={cartItems}
          />


          <div className='hidden md:block ml-5 w-6/12'>
            <div>
            {
                cartItems.map((item) => {
                    return <CartItem 
                        imgSrc={item.imgSrc}
                        price={item.price}
                        key={item.id}
                        quantity={item.noOfItems}
                        id={item.id}
                        itemName={item.itemName}
                        setTotal={setTotal}
                        total={total}
                        item={item}
                        setCartItems={setCartItems}
                    />
                })
            }
            </div>

            <div className='w-full flex flex-col justify-between'>
                <div className='flex'>
                    <div>Products in cart:</div>
                    <div className='text-black ml-auto'>{cartItems.length}</div>
                </div>
                <div className='flex mt-1'>
                    <div>Shipping:</div>
                    <div className='text-black ml-auto'>${shippingFee}</div>
                </div>
                <div className='flex mt-1'>
                    <div>Total:</div>
                    <div className='text-black ml-auto'>${total}</div>
                </div>
                
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ShippingDetails