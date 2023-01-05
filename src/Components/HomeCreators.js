import React, {useEffect, useState} from 'react';
import slider1 from '../Images/homeslider1.png';
import slider2 from '../Images/homeslider2.png';
import slider3 from '../Images/homeslider3.png';

function HomeCreators() {

  const imgSrc = [
    slider1, slider2, slider3
  ]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const displayTimer = setInterval(imageFade, 3000)

    function imageFade(){
      
      if(current === 0 || current < 2){
        setCurrent(prev => {
          return prev + 1
        })
      }
      else if(current ===2) {
        setCurrent(0)        
      }
      clearInterval(displayTimer)
    }
  }, [current])


  return (
    <div id='animator' className='max-w-full  relative overflow-x-hidden h-96'>
        <div className='h-80 bg-gray-200 relative w-full pl-1 md:pl-6 pr-2 md:pr-9 sm:pt-5'>
            <div className='flex md:h-32 mb-4'>
                <h2 className='text-2xl w-6/12 sm:w-5/12 sm:text-4xl'>TOP CREATORS OF THE WEEK</h2>
                <ul className='ml-auto hidden sm:flex flex-col justify-between relative'>
                    <li>Editorials</li>
                    <li>Fashion</li>
                    <li>Lifestyle</li>
                    <li>Blueprint</li>
                    <li className='absolute -left-4 h-full w-2 bg-zinc-400 flex rounded-md'><span className='w-full h-1/5 bg-black self-end rounded-md'></span></li>
                </ul>
            </div>
            <p className='sm:w-11/12'>
              “Everything always looked better in black and white. Everything always  as if it were the first time; there's always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>

            <div className='absolute top-24 sm:top-10 right-16 sm:right-1/4 h-56 w-56 sm:h-80 sm:w-80'>
              <div className='relative h-full min-w-full'>
                <div className='first-image creators-img absolute h-full'>
                  <img className='slide-in-img h-full transition-all delay-1000 ease-in-out' src={imgSrc[current]} alt='slide' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCreators