import React from 'react'

function HomeCarousel() {
  return (
    <div>
        <div className='flex flex-col w-10/12 lg:w-6/12 m-auto my-5 md:w-6/12'>
            <h1 className='font-bold text-3xl text-center md:text-left md:text-5xl mb-9' style={{lineHeight: '3.7rem'}}>
                Photography is poetry {`&`} beautiful untold stories
            </h1>
            <p className='leading-7 md:text-xl text-center md:text-left'>
                Flip through more than 10,000 vintage shots, old Photographs, historic images and captures seamlessly in one place. Register to get top access.
            </p>
        </div>
    </div>
  )
}

export default HomeCarousel