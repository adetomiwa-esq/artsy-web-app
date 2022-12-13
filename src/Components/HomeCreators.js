import React, {useEffect} from 'react';
import slider1 from '../Images/homeslider1.png';
import slider2 from '../Images/homeslider2.png';
import slider3 from '../Images/homeslider3.png';

function HomeCreators() {

  
  

  // useEffect(()=>{

  //   const auto = true;
  //   const intervalTime = 6000;
    


  //   function nextPic(){
  //     const currentPic = document.querySelector('#current');
  //     const firstPic = document.querySelector('.first')
      
      

  //     if(currentPic.nextElementSibling) {
        
  //       currentPic.classList.toggle('opacity-0')
  //       currentPic.nextElementSibling.classList.toggle('opacity-0');
  //       currentPic.nextElementSibling.classList.toggle('opacity-100');
  //       currentPic.removeAttribute('id')
  //       currentPic.nextElementSibling.setAttribute('id', 'current')
  //     } 
  //     else {
  //       firstPic.setAttribute('id', 'current')
  //     }
  //   }

  //   if(auto) {
  //     let slideInterval = setInterval(nextPic, intervalTime)
  //   }

    
  // }, [])

  return (
    <div className='max-w-full  relative h-96 overflow-y-hidden overflow-x-hidden' style={{height:'450px'}}>
        <div className='h-96 bg-gray-200 relative w-full sm:pt-5'>
            <div className='flex border border-red-500'>
                <h2 className='sm:text-4xl'>TOP CREATORS OF THE WEEK</h2>
                <ul>
                    <li>Editorials</li>
                    <li>Fashion</li>
                    <li>Lifestyle</li>
                    <li>Blueprint</li>
                    <li></li>
                </ul>
            </div>
            <p>
              “Everything always looked better in black and white. Everything always  as if it were the first time; there's always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>
            <div className='absolute top-10 right-1/4 h-48 w-48 sm:h-96 sm:w-96'>
              <div className='relative border border-red-500 h-full min-w-full'>
                <div id='current' className='first w-96 h-96 '><img className='h-full w-full absolute top-0' src={slider1} alt='slide' /></div>
                <div className='opacity-0 w-96 h-96 '><img className='h-full w-full absolute top-0' src={slider2} alt='slide' /></div>
                <div className='opacity-0 w-96 h-96 '><img className='h-full w-full absolute top-0' src={slider3} alt='slide' /></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCreators