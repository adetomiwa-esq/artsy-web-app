import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineShoppingCart, AiOutlineBell,  AiOutlineClose } from 'react-icons/ai';

function Navbar({cartItems}) {

  const [windowWidth, setWindowWidth] = useState({
    currentWidth: window.innerWidth
  })

  const updateWindowSize = () => {
    setWindowWidth({currentWidth: window.innerWidth})
  }

  const [mobileNav, setMobileNav] = useState(false)

  function openMobileLinks(){
    setMobileNav(true)
  }

  function closeMobileLinks(){
    setMobileNav(false)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)

    return() => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [windowWidth])

  return (
    <nav className='flex pl-5 lg:pl-28 items-center h-16 justify-between w-full fixed pr-2 md:pr-14 z-40 bg-white'
      >
      <i className='text-2xl sm:hidden cursor-pointer' onClick={openMobileLinks}><GoThreeBars /></i>
      <div className='text-2xl sm:text-3xl'>ARTSY.</div>

      <div className={`w-full h-screen sm:h-fit left-0 sm:w-2/4 flex flex-col top-px sm:static  fixed z-50 bg-white ${mobileNav ? 'top-0' : 'top-full'}`}>
        <div className='block sm:hidden flex items-center mt-2 mb-9 text-3xl'>
          <div className='font-bold'>ARTSY.</div>
          <i className='ml-auto cursor-pointer' onClick={closeMobileLinks}><AiOutlineClose /></i>
        </div>
        <ul className='flex h-72 font-medium text-2xl sm:text-lg sm:h-fit sm:flex-row justify-between flex-col w-full'>
          <li className='' onClick={closeMobileLinks}>
            <Link className='relative group' to='/'>
              Home
              <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
            </Link>
          </li>

          <li className='' onClick={closeMobileLinks}>
            <Link className='relative group' to='marketplace'>
              Marketplace
              <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
            </Link>
          </li>

          <li className='' onClick={closeMobileLinks}>
            <Link className='relative group' to='/auctions'>
              Auctions
              <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
            </Link>
          </li>

          <li className='' onClick={closeMobileLinks}>
            <Link className='relative group' to='/drop'>
              Drop
              <div className='w-0 h-0.5 rounded-sm absolute bg-black group-hover:w-full transition-transform'/>
            </Link>
          </li>

        </ul>
      </div>
      <div className='flex justify-between text-2xl'>
        <i><BiSearch /></i>
        <Link className='ml-2 mr-2 relative' to='/cart'><AiOutlineShoppingCart /><div className={`${cartItems.length ? 'block' : 'hidden'} w-4 h-4 rounded-full bg-red-500 absolute -top-0.5 -right-2 text-sm flex items-center justify-center text-white`}>{cartItems.length}</div></Link>
        <i><AiOutlineBell /></i>
      </div>
    </nav>
  )
}

export default Navbar