import React from 'react'
import logo from './assets/movieslogo.png'
export default function Footer() {
    return (
        <div className='bg-slate-700'>
            <div className='flex justify-center'>
                <div>
                    <img src={logo} className='h-36' />
                </div>
                <div>
                    <div>
                        <p className='text-gray-400 text-4xl'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
