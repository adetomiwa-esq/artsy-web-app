import React, { useState, useEffect } from 'react';
import HomeCarousel from '../Components/HomeCarousel';
import HomeCreators from '../Components/HomeCreators';
import HomeProducts from '../Components/HomeProducts';
import NewsLetter from '../Components/NewsLetter';
import UpcomigAuctions from '../Components/UpcomigAuctions';

function Home() {

  const [windowWidth, setWindowWidth] = useState({
    currentWidth: window.innerWidth
  })

  const updateWindowSize = () => {
    setWindowWidth({currentWidth: window.innerWidth})
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize)

    return() => {
      window.removeEventListener('resize', updateWindowSize)
    }
  }, [windowWidth])


  return (
    <div className='pt-20'>
      <HomeCarousel />
      <HomeProducts 
        windowWidth={windowWidth.currentWidth}
      />
      <UpcomigAuctions />
      {/* <HomeCreators /> */}
      <NewsLetter />
    </div>
  )
}

export default Home