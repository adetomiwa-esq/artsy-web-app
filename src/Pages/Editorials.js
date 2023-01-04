import React, { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai';
import baseImg1 from '../Images/editorial-1.png';
import baseImg2 from '../Images/editorials-2.png';
import baseImg3 from '../Images/editorials-3.png';
import baseImg4 from '../Images/editorials-4.png';
import baseImg5 from '../Images/editorials-5.png';

function Editorials({currentItem, setCurrentItem, setCartItems, setTotal, total}) {
  

  useEffect(() => {

    const newItem = document.querySelector('#newItem')
    const notification =document.querySelector('.new-item')

    if(currentItem.itemName){
    newItem.addEventListener("click", warningSlideIn)}

    function warningSlideIn() {
        notification.classList.add('new-item-notification')

        const removeNotification = setInterval(clearNotification, 7000)
            function clearNotification(){
                notification.classList.remove('new-item-notification')
                clearInterval(removeNotification)
            }
    }
    
  }, [])

    const [number, setNumber] = useState(1)

    const add = () => {
      setNumber((old) => old + 1)
    }

    const minus = () => {
      setNumber((old) => {
        if(old > 1){
          return old - 1
        } else {
          return old = 1
        }
      })
    }

    const addToCart = () => {
      setCartItems((prevValue) => {
        return [...prevValue, {imgSrc: currentItem.imgSrc, price: currentItem.price * number, id: Math.random() * 1000, noOfItems: number, itemName:currentItem.itemName }]
      })
      calculateTotal()
      setCurrentItem({})
    }
    

    const calculateTotal = () => {
      // const totalItemCount = cartItems.reduce((total, item) => {
      //     return total + item.price
      //   }, 0)
        setTotal(total + currentItem.price * number)
    }
    
    
  return (
    <div className='pt-20 max-w-full px-5 sm:pl-16 text-zinc-500'>
      <div className='mb-12'>Home/Marketplace/Editorials/<span className='text-black'>{currentItem.itemName}</span></div>
        {currentItem.itemName && <div className='flex flex-col sm:flex-row border-2 sm:h-96'>
          <div className='sm:w-5/12 p-3'><img className='w-full h-full' src={currentItem.imgSrc} alt='img'/></div>
          <div className='sm:w-7/12 sm:h-full sm:border-l-2'>
            <div className='flex items-center h-12 border-b-2 px-5'>
              <div className='text-black text-2xl'>{currentItem.itemName}</div> <span className='text-zinc-400 ml-auto'>0.09</span>
            </div>
            <div className='mt-2 h-80 flex flex-col justify-between'>
              <div className='text-sm mt-2 pl-4'>
                <div className='mb-2'>Creator: <span className='text-blue-400'>Ali Dawa</span></div>
                <div className='mb-2'>Made in Italy</div>
                <div>Total views: 1.7k views</div>
                <div className='mt-3 text-2xl'><span onClick={minus} className='mr-4 cursor-pointer'>-</span>{number}<span onClick={add} className='ml-4 cursor-pointer'>+</span></div>
                <div className='flex mt-4'>
                  <button id='newItem' onClick={addToCart} className='bg-blue-700 py-1 w-36 text-white mr-3'>Add to cart</button>
                  <div className='border-2 ml-3 w-10 px-2 py-1 text-lg'><AiOutlineHeart /></div>
                </div>
              </div>

              <div className=''>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Description</div> <i className='ml-auto'><AiOutlineDown /></i></div>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Listings</div> <i className='ml-auto'><AiOutlineDown /></i></div>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Status</div> <i className='ml-auto'><AiOutlineDown /></i></div>
              </div>
            </div>
          </div>
        </div>}
        
        <div className='flex overflow-x-scroll max-w-full mt-14'>
          <div className='min-w-fit mr-4 border-2 py-2 px-6'><div className='mb-3 w-fit ml-auto'><AiOutlineHeart /></div><img className='w-72 h-64' src={baseImg1} alt='img' /><div className='mt-3'><span className='float-right'>3.20</span></div></div>
          <div className='min-w-fit mr-4 border-2 py-2 px-6'><div className='mb-3 w-fit ml-auto'><AiOutlineHeart /></div><img className='w-72 h-64' src={baseImg2} alt='img' /><div className='mt-3'><span className='float-right'>0.23</span></div></div>
          <div className='min-w-fit mr-4 border-2 py-2 px-6'><div className='mb-3 w-fit ml-auto'><AiOutlineHeart /></div><img className='w-72 h-64' src={baseImg3} alt='img' /><div className='mt-3'><span className='float-right'>1.24</span></div></div>
          <div className='min-w-fit mr-4 border-2 py-2 px-6'><div className='mb-3 w-fit ml-auto'><AiOutlineHeart /></div><img className='w-72 h-64' src={baseImg4} alt='img' /><div className='mt-3'><span className='float-right'>2.20</span></div></div>
          <div className='min-w-fit mr-4 border-2 py-2 px-6'><div className='mb-3 w-fit ml-auto'><AiOutlineHeart /></div><img className='w-72 h-64' src={baseImg5} alt='img' /><div className='mt-3'><span className='float-right'>1.23</span></div></div>
        </div>


        <button className='border rounded-lg mt-16 px-8 py-2 block m-auto'>Explore all</button>


        <div className='new-item'>Item{`${number > 1 ? 's' : ''}`} added to cart</div>
        
    </div>
  )
}

export default Editorials