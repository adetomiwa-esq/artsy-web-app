import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { GoSettings } from 'react-icons/go';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

function MarketLeft() {

  const [filter, setFilter] = useState(false);

  function toggleFilter() {
    setFilter((previous) => !previous)
  }

  const [price, setPrice] = useState(false);

  function togglePrice() {
    setPrice((previous) => !previous)
  }

  const [artist, setArtist] = useState(false);

  function listArtistsPrices() {
    setArtist((previous) => !previous)
  }

    return(
      <div className='text-neutral-600 '>
        <div className='relative w-40 h-8'>
          <input
            className='bg-zinc-200 placeholder-gray-400 w-full h-full pl-6 max-w-full'
            type='text'
            placeholder='search'
          />
          <i className='absolute text-lg text-zinc-400 left-1 top-1/4'><BiSearch /></i>
        </div>

        <div className='mt-6'>
          <div className='flex items-center border-b-2 pb-3'>
            <div className='w-fit text-2xl' style={{transform:'rotate(90deg)'}}><GoSettings /></div>
            <div className='text-lg ml-4 text-black'>Filter</div>
          </div>
        </div>

        <div className={`${filter ? '' : 'h-7'} overflow-y-hidden mb-10`}>
          <div className='flex items-center mb-4 pr-4 text-black text-lg'>
            <h3 className=''>By category</h3>
            <div className='ml-auto' onClick={toggleFilter}>{filter ?<AiOutlineUp /> : <AiOutlineDown />}</div>
          </div>

          <div className='text-sm'>
            <div className='flex mb-1'>
              <input 
                type='checkbox'
                className='bg-zinc-200 mr-2'
              />
              <div>Editorials</div>
            </div>

            <div className='flex mb-1'>
              <input 
                type='checkbox'
                className='bg-zinc-200 mr-2'
              />
              <div>Fashion</div>
            </div>

            <div className='flex mb-1'>
              <input 
                type='checkbox'
                className='bg-zinc-200 mr-2'
              />
              <div>Optics</div>
            </div>

            <div className='flex mb-1'>
              <input 
                type='checkbox'
                className='bg-zinc-200 mr-2'
              />
              <div>{`Art & Museum`}</div>
            </div>

            <div className='flex mb-1'>
              <input 
                type='checkbox'
                className='bg-zinc-200 mr-2'
              />
              <div>Nature</div>
            </div>
          
          </div>
        </div>


        <div className={`${price ? '' : 'h-7'} overflow-y-hidden mb-10`}>
          <div className='flex items-center mb-4 pr-4 text-black text-lg'>
            <h3>By Price</h3>
            <div className='ml-auto' onClick={togglePrice}>{price ?<AiOutlineUp /> : <AiOutlineDown />}</div>
          </div>

          <div className='mt-3 text-sm'>
            {`$100.00 - $150.00`}
          </div>

          <div className='mt-3'>
            <input 
              type='range'
            />
          </div>
        </div>

        <div className={`${artist ? '' : 'h-7'} overflow-y-hidden mb-6`}>
          <div className='flex items-center mb-4 pr-4 text-black text-lg'>
            <h3>By artist</h3>
            <div className='ml-auto' onClick={listArtistsPrices}>{artist ?<AiOutlineUp /> : <AiOutlineDown />}</div>
          </div>

          <div className='mb-3 text-sm'>All</div>
          <div className='mb-3 text-sm'>{`Below $100.00`}</div>
          <div className='mb-3 text-sm'>{`$100.00 - $150.00`}</div>
          <div className='mb-3 text-sm'>{`$150.00 - $200`}</div>
          <div className='mb-3 text-sm'>{`Below $200.00`}</div>
        </div>

        <select className='w-full'>
          <option>collection year</option>
        </select>

      </div>
    )
}

export default MarketLeft