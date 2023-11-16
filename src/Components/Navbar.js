import React, { useState } from 'react'
import logo from './assets/search.svg'

export default function Navbar() {
    const [sc, usc] = useState(false);
    const handlehover = () => {
        usc(true);
    }
    const leavehover = () => {
        usc(false);
    }
    return (
        <div>
            <div className='flex justify-between p-5'>
                <div>
                    <div className='text-xl font-semibold text-white'>
                        Website Logo
                    </div>
                </div>
                <div className='flex w-2/3 justify-evenly'>

                    <div className=''>
                        <label className='flex' onMouseEnter={handlehover} onMouseLeave={leavehover}>
                            <input className={`${sc ? 'flex' : 'hidden'} mx-2`} />
                            <img src={logo} />
                        </label>
                    </div>
                    <div className='text-lg font-semibold relative'>
                        <button className='bg-clip-text text-transparent bg-white hover:scale-110'>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
