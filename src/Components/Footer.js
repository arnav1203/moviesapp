import React from 'react'
import logo from './assets/movieslogo.png'
export default function Footer() {
    return (
        <div className='bg-slate-700 px-16 py-10'>
            <div className='flex flex-wrap'>
                <div>
                    <img src={logo} className='h-36 w-36' />
                </div>
                <div className=' xl:w-1/4'>
                    <div className='py-3'>
                        <p className='text-gray-400 text-4xl'>About</p>
                    </div>
                    <div className='text-sm text-white space-y-4'>
                        <p>1HD is free tv shows streaming website with zero ads, it allows you watch tv shows online, watch tv shows online free in high quality for free. You can also download full tv shows and watch it later if you want.
                        </p>
                        <p>
                            This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
                        </p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
