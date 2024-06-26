import React, { useState } from 'react'
import logo from './assets/search.svg'
import mlogo from './assets/movieslogo.png'
import { useNavigate } from 'react-router-dom';
import SearchList from './SearchList';

export default function Navbar({ onSearch, onType, results }) {
    const [searchvalue, setsearchvalue] = useState('');
    const [searchbar, setsearchbar] = useState(false);

    const navigate = useNavigate();

    const navabout = () => {
        navigate('/about')
    }

    const setsearch = (e) => {
        setsearchvalue(e.target.value);
        // console.log(e.target.value);
        onType(e.target.value)
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
        navigate('/home')
    }

    const navlogin = () => {
        navigate("/")
    }
    return (
        <div className=' bg-[#286986] m-5 rounded-3xl'>
            <div className='flex justify-between items-center'>
                <div>
                    <div className='text-xl font-semibold pl-6 text-white'>
                        <img className='h-20' src={mlogo} />
                    </div>
                </div>
                <div className='flex md:w-2/3 justify-around items-center'>
                    <div className='flex flex-col'>
                        <div className='flex justify-end items-center'>
                            <form onSubmit={(event) => { event.preventDefault(); handlesearchbar(); handlesearch(); }}>
                                <label className='flex'>
                                    <input onChange={setsearch} className={`flex rounded-lg placeholder:p-2 p-1 bg-gray-200 ${searchbar ? 'flex' : 'hidden'} md:flex`} placeholder='Search' />
                                    <button type='submit' className='mx-2'><img src={logo} alt='' /></button>
                                </label>
                            </form>
                        </div>
                        <div className='absolute mt-10 w-96 bg-white z-50 shadow-lg rounded-lg max-h-40 overflow-y-auto no-scrollbar'>
                            <SearchList results={results} />
                        </div>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110' onClick={navhome}>
                            HOME
                        </button>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110' onClick={navabout}>
                            ABOUT
                        </button>
                    </div>
                    <div className='text-lg font-semibold hidden md:flex'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110' onClick={navlogin}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
