import React from 'react'
import logo from './assets/search.svg'

export default function Navbar() {
    return (
        <div className='bg-gray-900'>
            <div className='flex justify-between items-center p-5'>
                <div>
                    <div className='text-xl font-semibold text-white'>
                        Website Logo
                    </div>
                </div>
                <div className='flex w-2/3 justify-around items-center h-7'>

                    <div className='flex justify-end'>
                        <label className='flex'>
                            <input className='flex rounded-lg placeholder:p-2 p-1 bg-gray-200' placeholder='Search' />
                            <button><img src={logo} className='mx-2' /></button>
                        </label>
                    </div>
                    <div className='text-lg font-semibold '>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            HOME
                        </button>
                    </div>
                    <div className='text-lg font-semibold '>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            ABOUT
                        </button>
                    </div>
                    <div className='text-lg font-semibold '>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
