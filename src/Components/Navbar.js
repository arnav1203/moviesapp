import React, { useState } from 'react'
import logo from './assets/search.svg'

export default function Navbar({ onSearch }) {
    const [searchvalue, setsearchvalue] = useState('');
    const [searchbar, setsearchbar] = useState(false);
    const setsearch = (e) => {
        setsearchvalue(e.target.value);
    }
    const handlesearch = () => {
        onSearch(searchvalue);
    }
    const handlesearchbar = () => {
        setsearchbar(true);
    }
    return (
        <div className='bg-gray-900'>
            <div className='flex justify-between items-center p-5'>
                <div>
                    <div className='text-xl font-semibold text-white'>
                        Website Logo
                    </div>
                </div>
                <div className='flex md:w-2/3 justify-around items-center h-7'>

                    <div className='flex justify-end'>
                        <label className='flex'>
                            <input onChange={setsearch} className={`flex rounded-lg placeholder:p-2 p-1 bg-gray-200 ${searchbar ? 'flex' : 'hidden'} md:flex`} placeholder='Search' />
                            <button onClick={handlesearch} className={` ${searchbar ? 'flex' : 'hidden'} mx-2 items-center md:flex`}><img src={logo} alt='' /></button>
                            <button onClick={handlesearchbar} className={`${searchbar ? 'hidden' : 'flex'}mx-2 md:hidden`}><img src={logo} alt='' /></button>
                        </label>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex '>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            HOME
                        </button>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            ABOUT
                        </button>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
