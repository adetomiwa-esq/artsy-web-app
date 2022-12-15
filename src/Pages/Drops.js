import React from 'react'

function Drops() {
  return (
    <div className='pt-20 px-20 text-zinc-500'>
        <div className='pb-10'>Home /Auctions/ Live bid/ <span className='text-black'>Drop</span></div>
        <div className='flex flex-col items-center h-32 justify-between'>
            <h1 className='text-black text-4xl'>Upcoming drops</h1>
            <p>Turn on notifications so that no drops will miss you.</p>
            <button className='border py-2 rounded-md w-48 text-black hover:text-white hover:bg-blue-600'>Notify me</button>
        </div>
    </div>
  )
}

export default Drops