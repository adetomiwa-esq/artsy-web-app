import React from 'react';
import Metamask from '../Images/MetaMask.png';
import Coinbase from '../Images/Coinbase.png';
import Walletconnect from '../Images/WalletConnect.png';
import Phantom from '../Images/Phantom.png';
import { Link } from 'react-router-dom';

function PaymentDetails({total, cartItems, setCartItems}) {
  const shippingFee = 3

  function resetCart(){
    setCartItems([])
  }

  return (
    <div className='pt-24 pb-10 px-5 sm:px-16 text-zinc-500 flex'>
      <div className='w-full md:w-7/12'>
        <h3 className='font-semibold mb-3 ml-8'>Payment method</h3>
        <div className='border p-2 sm:p-8'>
          <div className='flex items-start'>
            <input
              type='radio'
              className='mt-2 mr-2'
            />
            <div>
              <div className='flex flex-col sm:flex-row sm:items-center'>
                <h4 className='font-semibold text-lg text-black'>Select your wallet</h4>
                <div className='flex justify-around sm:ml-auto'>
                  <img className='w-9' src={Metamask} alt='wallet-img' />
                  <img className='w-9' src={Coinbase} alt='wallet-img' />
                  <img className='w-9' src={Walletconnect} alt='wallet-img' />
                  <img className='w-9' src={Phantom} alt='wallet-img' />
                </div>
              </div>
              <p className='lg:w-10/12'>
                Connect with one of our available wallet providers or add and connect a new wallet.
              </p>
            </div>
          </div>
          <form className='flex flex-col mt-8'>
            <div className='mb-4'>
              <label htmlFor='prefWallet' className='block mb-2'>Wallet type</label>
              <input
                type='text'
                id='prefWallet'
                className='border-2 border-zinc-300 bg-zinc-200 p-1 w-full rounded-md outline-none'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='key' className='block mb-2'>Key</label>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Please enter your key'
                  id='key'
                  className='border-2 border-zinc-300 bg-zinc-200 p-1 w-full rounded-md outline-none'
                />
                <img className='w-6 absolute top-1/4 right-2' src={Metamask} alt='wallet-img' />
              </div>
            </div>

            <div className='flex w-full'>
              <div className='mb-4 w-6/12'>
                <label htmlFor='expiry-date' className='block mb-2'>Expiry date</label>
                <input
                  type='text'
                  id='expiry-date'
                  placeholder='MM/YY'
                  className='border-2 border-zinc-300 bg-zinc-200 p-1 w-full rounded-md outline-none'
                />
              </div>

              <div className='mb-4 w-6/12 ml-3'>
                <label htmlFor='cvv' className='block mb-2'>CVV</label>
                <input
                  type='password'
                  id='cvv'
                  placeholder='***'
                  className='border-2 border-zinc-300 bg-zinc-200 p-1 w-full rounded-md outline-none'
                />
              </div>
            </div>

            <div className='flex mt-5'>
              <input
                type='checkbox'
                className='mr-2'
                id='save'
              />
              <label className='block text-sm' htmlFor='save'>Save my wallet details & information for future transactions</label>
            </div>
          </form>
        </div>

        <div>
          <Link to='/thanks' onClick={resetCart}><button className='bg-blue-600 w-full h-16 text-2xl text-white mt-9 rounded-md'>Confirm</button></Link>
        </div>
      </div>


      <div className='hidden md:block w-5/12 px-3'>
        <div className='ml-auto w-fit mb-6'>secure server</div>
        <h3 className='text-lg text-black pb-7 border-b'>Payment Summary</h3>

        <div className='pt-7 pb-7 border-b'>
          <div>Metamask wallet: 002345kJi90pzzz3</div>
          <div>Actively linked to Yaba, Lagos Nigeria.</div>
        </div>

        <div className='pt-7 pb-7 border-b'>Expected arrival date: Between 22nd January and 26th January 2023</div>

        <div className='w-full flex flex-col justify-between h-40 p-6'>
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
  )
}

export default PaymentDetails