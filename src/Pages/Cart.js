import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import {BsEmojiExpressionless} from 'react-icons/bs'

function Cart({cartItems, setCartItems, setTotal, total}) {

    useEffect(() => {
        if(!cartItems.length){
        const cartWarning = document.querySelector('#cart-warning')
        const emptyCart =document.querySelector('.empty-cart')
        
        cartWarning.addEventListener("click", warningSlideIn)

        function warningSlideIn() {
            emptyCart.classList.add('reveal-cart-warning')

            const removeNotification = setInterval(clearNotification, 7000)
                function clearNotification(){
                    emptyCart.classList.remove('reveal-cart-warning')
                    clearInterval(removeNotification)
                }
        }
        }
    },[cartItems.length])

    const shippingFee = 3
    
  return (
    <div className='py-20 text-zinc-400'>
        <ul className='hidden sm:block sm:flex justify-between w-9/12 md:w-7/12 lg:w-5/12 m-auto relative'>
            <li className='relative text-black'>
                <div>Shopping cart</div>
                <div className='absolute w-full h-1 bg-black -bottom-2 z-20'></div>
            </li>

            <li>
                <div>Shipping Details</div>
            </li>

            <li>
                <div>Payment Details</div>
            </li>
            <div className='absolute w-full h-1 bg-zinc-300 -bottom-2'></div>
        </ul>
        <div className='mt-9 mx-8 border-t'>
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
        <div className='flex flex-col-reverse sm:flex-row mt-5 sm:mt-10 mx-8 h- sm:h-28'>
            <div className='flex flex-col justify-between mt-5 sm:mt-0 w-full sm:w-60 lg:w-80'>
                {
                   cartItems.length ? <Link to='/shippingdetails' className='block text-center w-full mb-3'><button className='bg-blue-600 rounded w-56 h-12 sm:w-full text-white sm:h-14'>Proceed to checkout</button></Link> : <Link id='cart-warning' to='' className='block text-center w-full mb-3'><button className='bg-blue-600 rounded w-56 h-12 sm:w-full text-white sm:h-14'>Proceed to checkout</button></Link>
                }
                <div className='text-center'><Link to='/marketplace' className=' underline text-blue-500 text-center'>Continue Shopping</Link></div>
            </div>

            <div className='sm:w-6/12 sm:ml-auto sm:flex sm:flex-col sm:justify-between'>
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
                <div className='flex border-dashed border-t sm:hidden mt-3 pt-2'>
                    <div>Grand total:</div>
                    <div className='text-black ml-auto'>${total + shippingFee}</div>
                </div>
            </div>
        </div>

        <div className='empty-cart'><div className='text-blue-600'>your cart is empty</div> <i className='text-yellow-400'><BsEmojiExpressionless /></i></div>
    </div>
  )
}

export default Cart