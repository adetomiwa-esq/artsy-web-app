import React from 'react';
import Featured1 from '../Images/featured1.png'
import Featured2 from '../Images/featured2.png';
import Featured3 from '../Images/featured3.png'
import user1 from '../Images/Ellipse24.png';
import user2 from '../Images/Ellipse25.png';
import user3 from '../Images/Ellipse26.png';
import user4 from '../Images/Ellipse27.png';
import user5 from '../Images/Ellipse28.png';
import { BsArrowRight } from 'react-icons/bs'


function HomeProducts({windowWidth}) {
    console.log(windowWidth)
  return (
    <div className='px-10 md:px-24'>
        <h1 className='text-2xl sm:text-5xl mb-4'>Featured Products</h1>
        <div>
            <div className='flex border-t-2 border-gray-400 py-14 flex-col md:flex-row'>
                <div className='md:w-6/12 relative mr-7 w-full h-64 sm:h-64 group'>
                    <img className='w-full brightness-50 sm:brightness-100 h-64 sm:min-h-full sm:group-hover:brightness-50' alt='pic' src={Featured1} />
                    <h1 className='text-4xl absolute top-12 text-white w-full text-center sm:hidden'>
                        Boolean Egyptian
                    </h1>
                    <div className='text-5xl border border-gray-300 text-white sm:hidden p-5 absolute bottom-9 right-8 rounded-full cursor-pointer'>
                            <i><BsArrowRight /></i>
                    </div>
                    <div className='flex justify-center items-center absolute top-1/2 text-white w-full text-center'>
                        <div className='text-4xl hidden sm:group-hover:block'>View product</div>
                        <div className='text-3xl border border-gray-300 p-2 rounded-full ml-4 hidden sm:group-hover:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                    
                </div>
                <div className='md:w-6/12 ml-auto flex flex-col justify-between w-full mt-3 sm:mt-6 '>
                    <h1 className='text-3xl hidden sm:block'>
                        The Boolean Egyptian
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className='flex items-center mt-3 md:mt-0'>
                        <div className='flex'>
                            <img alt='user-img' src={user1} className='w-8'/>
                            <img alt='user-img' src={user2} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user3} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user4} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user5} className='w-8 -ml-4'/>
                        </div>
                        <div className='ml-2'>64 major creators</div>
                        <div className='ml-auto text-3xl border border-gray-300 p-2 rounded-full hidden sm:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                </div>
            </div>



            <div className='flex border-t-2 border-gray-400 py-14 flex-col-reverse md:flex-row'>
                
                <div className='md:w-6/12 ml-auto flex flex-col justify-between w-full mt-3 sm:mt-6 '>
                    <h1 className='text-3xl hidden sm:block'>
                        The Boolean Egyptian
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className='flex items-center mt-3 md:mt-0'>
                        <div className='flex'>
                            <img alt='user-img' src={user1} className='w-8'/>
                            <img alt='user-img' src={user2} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user3} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user4} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user5} className='w-8 -ml-4'/>
                        </div>
                        <div className='ml-2'>64 major creators</div>
                        <div className='ml-auto text-3xl border border-gray-300 p-2 rounded-full hidden sm:mr-4 sm:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                </div>


                <div className='md:w-6/12 relative mr-7 w-full h-64 sm:h-64 group'>
                    <img className='w-full brightness-50 sm:brightness-100 h-64 sm:min-h-full sm:group-hover:brightness-50' alt='pic' src={Featured2} />
                    <h1 className='text-4xl absolute top-12 text-white w-full text-center sm:hidden'>
                        Are We There Yet?
                    </h1>
                    <div className='text-5xl border border-gray-300 text-white sm:hidden p-5 absolute bottom-9 right-8 rounded-full cursor-pointer'>
                            <i><BsArrowRight /></i>
                    </div>
                    <div className='flex justify-center items-center absolute top-1/2 text-white w-full text-center'>
                        <div className='text-4xl hidden sm:group-hover:block'>View product</div>
                        <div className='text-3xl border border-gray-300 p-2 rounded-full ml-4 hidden sm:group-hover:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div className='flex border-t-2 border-gray-400 py-14 flex-col md:flex-row'>
                <div className='md:w-6/12 relative mr-7 w-full h-64 sm:h-64 group'>
                    <img className='w-full brightness-50 sm:brightness-100 h-64 sm:min-h-full sm:group-hover:brightness-50' alt='pic' src={Featured3} />
                    <h1 className='text-4xl absolute top-12 text-white w-full text-center sm:hidden'>
                        Oloibiri 1997
                    </h1>
                    <div className='text-5xl border border-gray-300 text-white sm:hidden p-5 absolute bottom-9 right-8 rounded-full cursor-pointer'>
                            <i><BsArrowRight /></i>
                    </div>
                    <div className='flex justify-center items-center absolute top-1/2 text-white w-full text-center'>
                        <div className='text-4xl hidden sm:group-hover:block'>View product</div>
                        <div className='text-3xl border border-gray-300 p-2 rounded-full ml-4 hidden sm:group-hover:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                    
                </div>
                <div className='md:w-6/12 ml-auto flex flex-col justify-between w-full mt-3 sm:mt-6 '>
                    <h1 className='text-3xl hidden sm:block'>
                        The Boolean Egyptian
                    </h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className='flex items-center mt-3 md:mt-0'>
                        <div className='flex'>
                            <img alt='user-img' src={user1} className='w-8'/>
                            <img alt='user-img' src={user2} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user3} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user4} className='w-8 -ml-4'/>
                            <img alt='user-img' src={user5} className='w-8 -ml-4'/>
                        </div>
                        <div className='ml-2'>64 major creators</div>
                        <div className='ml-auto text-3xl border border-gray-300 p-2 rounded-full hidden sm:block'>
                            <i><BsArrowRight /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProducts