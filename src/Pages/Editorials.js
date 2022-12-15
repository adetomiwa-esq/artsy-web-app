import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineHeart } from 'react-icons/ai';

function Editorials({currentItem}) {
    const [newItem, setNewItem] = useState(currentItem);

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
    
  return (
    <div className='pt-20 px-5 sm:px-16 text-zinc-500'>
      <div className='mb-12'>Home/Marketplace/Editorials/<span className='text-black'>{newItem.itemName}</span></div>
        {newItem.itemName && <div className='flex flex-col sm:flex-row border-2 sm:h-96'>
          <div className='w-full sm:w-5/12 p-3'><img className='w-full h-full' src={newItem.imgSrc}/></div>
          <div className='sm:w-7/12 sm:h-full sm:border-l-2'>
            <div className='flex items-center h-12 border-b-2 px-5'>
              <div className='text-black text-2xl'>{newItem.itemName}</div> <span className='text-zinc-400 ml-auto'>0.09</span>
            </div>
            <div className='mt-2 h-80 flex flex-col justify-between'>
              <div className='text-sm mt-2 pl-4'>
                <div className='mb-2'>Creator: <span className='text-blue-400'>Ali Dawa</span></div>
                <div className='mb-2'>Made in Italy</div>
                <div>Total views: 1.7k views</div>
                <div className='mt-3 text-2xl'><span onClick={minus} className='mr-4 cursor-pointer'>-</span>{number}<span onClick={add} className='ml-4 cursor-pointer'>+</span></div>
                <div className='flex mt-4'>
                  <button className='bg-blue-700 py-1 w-36 text-white mr-3'>Add to cart</button>
                  <div className='border-2 ml-3 w-10 px-2 py-1 text-lg'><AiOutlineHeart /></div>
                </div>
              </div>

              <div className=''>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Description</div> <i className='ml-auto'><AiOutlineDown /></i></div>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Description</div> <i className='ml-auto'><AiOutlineDown /></i></div>
                <div className=' px-2 flex items-center h-10 border-t-2'><div>Description</div> <i className='ml-auto'><AiOutlineDown /></i></div>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Editorials