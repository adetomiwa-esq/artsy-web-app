import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineBell } from 'react-icons/ai'

function Navbar() {
  return (
    <nav className='flex pl-28 items-center h-16 justify-between pr-14'>
      <div className='text-3xl'>ARTSY.</div>
      <ul className='flex w-2/4 justify-between'>
        <li className=''>
          <Link className='relative group' to='/'>
            Home
            <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
          </Link>
        </li>

        <li className=''>
          <Link className='relative group' to='/'>
            Marketplace
            <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
          </Link>
        </li>

        <li className=''>
          <Link className='relative group' to='/'>
            Auctions
            <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
          </Link>
        </li>

        <li className=''>
          <Link className='relative group' to='/'>
            Drop
            <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
          </Link>
        </li>
        
      </ul>
      <div className='flex w-1/12 justify-between text-2xl'>
        <i><BiSearch /></i>
        <i><AiOutlineShoppingCart /></i>
        <i><AiOutlineBell /></i>
      </div>
    </nav>
  )
}

export default Navbar