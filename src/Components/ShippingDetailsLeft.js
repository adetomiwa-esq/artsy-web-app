import React, { useState, useEffect
 } from 'react';
import { Link } from 'react-router-dom';
import {BsEmojiExpressionless} from 'react-icons/bs';

function ShippingDetailsLeft({cartItems}) {

  const [userDetails, setUserDetails] = useState({
    email: '',
    isChecked: false,
    fullName: '',
    selectWallet: '',
    selectCity: '',
    selectCountry: '',
    postalCode: '',
    phoneNumber: ''
  })

  const updateForm = (e) => {
    const {name, value, type, checked} = e.target
    setUserDetails((prevUserDetails) => {
      return {
        ...prevUserDetails,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }


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

    if(cartItems.length) {
      const proceedToPayment = document.querySelector('#proceedToPayment');
    //  proceedToPayment.style.pointerEvents = 'none'
    proceedToPayment.addEventListener('click', submitDetails)

    function submitDetails(){
      if(userDetails.email !== '') {
         alert(userDetails.email)
      }
      
    }
    }
},[cartItems.length])

  return (
    <div className='text-zinc-500 w-full md:w-6/12'>
      <form id='form' className='flex flex-col'>
        <div className='my-input first'>
          <label htmlFor='user-email'>Your email</label>
          <input 
              id='user-email'
              className='text-input'
              type='text'
              placeholder='email'
              name='email'
              value={userDetails.email}
              onChange={updateForm}
          />
          <div className='error'></div>
        </div>

        <div className='flex'>
          <input
            type='checkbox'
            checked={userDetails.isChecked}
            name='isChecked'
            onChange={updateForm}
            id='notifyMe'
          />
          <label className='check-label' htmlFor='notifyMe'>Get updates about new drops & exclusive offers</label>
        </div>

        <div className='my-input'>
          <label htmlFor='your-name'>Your full name</label>
          <input 
              id='your-name'
              className='letter value'
              type='text'
              placeholder='Full name'
              name='fullName'
              value={userDetails.fullName}
              onChange={updateForm}
          />
          <div className='error'></div>
        </div>

        <div className='my-input'>
          <label htmlFor='wallet'>Choose a wallet</label>
          <select
            id='wallet'
            name='selectWallet'
            value={userDetails.selectWallet}
            onChange={updateForm}
          >
            <option></option>
            <option value='coinbase'>xfgghf</option>
            <option value='phantom'></option>
            <option value='metaMask'></option>
            <option value='walletConnect'></option>
          </select>
        </div>

        <div className='my-input'>
          <label htmlFor='city'>City</label>
          <select
            id='city'
            name='selectCity'
            value={userDetails.selectCity}
            onChange={updateForm}
          >
            <option></option>
            <option value=''>xfgghf</option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>

        <div className='my-input location'>
          <div className='your-country'>
            <label htmlFor='country'>Country</label>
            <select
              id='country'
              name='selectCountry'
              value={userDetails.selectCountry}
              onChange={updateForm}
            >
              <option></option>
              <option value='Nigeria'>xfgghf</option>
              <option value='Ghana'></option>
              <option value='United States'></option>
              <option value='England'></option>
            </select>
          </div>

          <div className='your-code'>
            <label htmlFor='postalCode'>Postal code</label>
            <input 
              id='postalCode'
              className='letter value'
              type='text'
              placeholder='001001'
              name='postalCode'
              value={userDetails.postalCode}
              onChange={updateForm}
            />
          </div>
        </div>

        <div className='my-input'>
            <label htmlFor='phone'>Phone number</label>
            <input 
              id='phone'
              className='letter value'
              type='text'
              placeholder='08*********'
              name='phoneNumber'
              value={userDetails.phoneNumber}
              onChange={updateForm}
            />
          </div>

          {
          cartItems.length ? <Link id='proceedToPayment' to='/paymentdetails' className='block text-center w-full mt-10'><button className='bg-blue-600 rounded w-56 h-12 sm:w-full text-white sm:h-14'>Proceed to payment</button></Link> : <Link to='' className='block text-center w-full mt-10' id='cart-warning'><button className='bg-blue-600 rounded w-56 h-12 sm:w-full text-white sm:h-14'>Proceed to payment</button></Link>
          }
      </form>

      <div className='empty-cart'><div className='text-white'>your cart is empty</div> <i className='text-white'><BsEmojiExpressionless /></i></div>
    </div>
  )
}

export default ShippingDetailsLeft