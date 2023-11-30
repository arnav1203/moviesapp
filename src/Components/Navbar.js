import React, { useState } from 'react'
import logo from './assets/search.svg'
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onSearch }) {
    const [searchvalue, setsearchvalue] = useState('');
    const [searchbar, setsearchbar] = useState(false);

    const navigate = useNavigate();

    const setsearch = (e) => {
        setsearchvalue(e.target.value);
    }
    const handlesearch = () => {
        onSearch(searchvalue);
        console.log('working');
    }
    const handlesearchbar = () => {
        if (searchbar === false)
            setsearchbar(true);
        else
            setsearchbar(false);
    }
    const navhome = () => {
        navigate('/')
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
                        <form onSubmit={(event) => { event.preventDefault(); handlesearchbar(); handlesearch(); }}>
                            <label className='flex'>
                                <input onChange={setsearch} className={`flex rounded-lg placeholder:p-2 p-1 bg-gray-200 ${searchbar ? 'flex' : 'hidden'} md:flex`} placeholder='Search' />
                                <button type='submit' className='mx-2'><img src={logo} alt='' /></button>
                                {/* <button onClick={handlesearch} className={` ${searchbar ? 'flex' : 'hidden'} mx-2 items-center md:flex`}><img src={logo} alt='' /></button> */}
                            </label>
                        </form>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex '>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110' onClick={navhome}>
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
