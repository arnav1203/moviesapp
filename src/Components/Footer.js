import React, { useState } from 'react'
import logo from './assets/movieslogo.png'
export default function Footer({ onClick }) {
    const [tp, stp] = useState(false)
    const handle = () => {
        if (tp === false)
            stp(true);
        onClick(stp);
    }
    return (
        <div className='bg-slate-700 px-16 pb-4'>
            <div className='flex flex-wrap justify-around'>
                <div className='w-1/2 flex justify-around'>
                    <div>
                        <img src={logo} className='h-36 w-36' />
                    </div>
                    <div className=' xl:w-2/3'>
                        <div className='pt-3'>
                            <p className='text-gray-400 text-2xl'>About Us</p>
                        </div>
                        <div className='text-sm text-white space-y-2'>
                            <p>CineScopHub is free tv shows streaming website with zero ads, it allows you watch trailers of tv shows online in high quality for free.

                            </p>
                            <p>
                                This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='space-x-5 pt-8'>
                    <a href='/contact' className='text-indigo-600 hover:underline'>Contact</a>
                    <a href='' className='text-indigo-600 hover:underline'>Terms of Service</a>
                </div>
                <div className='pt-8'>
                    <button
                        className="border border-slate-500 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-xl hover:bg-gradient-to-r from-cyan-900 via-cyan-600 to-cyan-500 hover:text-gray-800 transform hover:scale-92 transition-all duration-300" onClick={handle}>Top
                    </button>
                </div>
            </div>
        </div>
    )
}

