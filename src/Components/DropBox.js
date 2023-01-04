import React from 'react'

function DropBox({drop}) {
  return (
    <div className='flex flex-col md:flex-row w-full mb-10 relative md:static'>
        <div className='relative w-full md:w-7/12 md:h-96'>
            <img className='w-full h-full' src={drop.imgSrc} alt='img' />
            <div className='absolute text-white bottom-2 w-full'>
                <div className='w-10/12 m-auto py-2 px-4' style={{background: 'linear-gradient(0deg, rgba(0, 0 , 0 ,0.2), rgba(0, 0, 0, 0.2)), rgba(245, 244, 244, 0.24)'}}>
                    <div className='text-sm mb-2'>{drop.time}</div>
                    <div className='flex'>
                        <div className='text-lg md:text-2xl'>{
                               drop.availability ? `${drop.hrs}: hrs: ${drop.min} min: 22 s` : `${drop.when}`
                            }
                        </div>
                        <button className={`${drop.joinColor} text-white w-16 rounded-md ml-auto`}>{drop.toDo}</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col h-52 md:h-96 justify-between md:w-5/12 lg:w-4/12  md:pl-9'>
            <button className={`${drop.color} text-slate-50 w-40 rounded-md absolute top-1 right-1 md:static`}>{drop.status}</button>
            <div className=''>{drop.date}</div>
            <h2 className='text-black text-2xl'>{drop.event}</h2>
            <p className='text-sm'>{drop.text}</p>
            <div className='flex'><div>Creator:</div><span className='ml-2 text-blue-400'>{drop.creator}</span></div>
            <a href='#' className='text-blue-400 underline'>{drop.link}</a>
        </div>
    </div>
  )
}

export default DropBox