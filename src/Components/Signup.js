import React from 'react'
import Navbar from './Navbar'

export default function Signup() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen -m-16'>
                <form className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96'>
                    <div className='text-4xl flex justify-center w-full m-2'>Join Us Today!</div>
                    <div className='flex justify-center text-xl text-gray-300 m-2'>Signup now to become a member</div>
                    <div className='flex'>
                        <label className='flex flex-col w-full p-1'>
                            First Name
                            <input type='text' className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter First Name' required />
                        </label>
                        <label className='flex flex-col w-full p-1'>
                            Last Name
                            <input type='text' className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Last Name' required />
                        </label>
                    </div>
                    <label className='flex flex-col w-full p-1'>
                        Email
                        <input type='email' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter Email' />
                    </label>
                    <label className='flex flex-col w-full p-1'>
                        Create new password
                        <input type='password' required className='w-full rounded-md h-10 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Create password' />
                    </label>
                    <div className='flex justify-center'>
                        <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Signup</span>
                            </div>
                        </button>
                    </div>
                    <div className='flex justify-center p-3'><span>Already a member?</span><a href='/Login' className='text-indigo-800 hover:underline'>Login Here</a></div>

                </form>
            </div>
        </div>
    )
}
