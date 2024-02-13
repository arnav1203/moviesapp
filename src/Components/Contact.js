import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Contact() {

    const [data, setdata] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handlechange = (e) => {
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }

    const handlesubmit = () => {
        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center w-1/2'>
                    <div className='py-4'>
                        <h1 className='text-4xl text-white'>Contact Us</h1>
                    </div>
                    <div className='py-4'>
                        <p className='text-white'>Please submit your enquiry using the form below and we will get in touch with you shortly.</p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <form className='space-y-7' onSubmit={handlesubmit}>
                            <div className=' sm:w-full '>
                                <textarea type="text" name='email' className="bg-zinc-700 border border-gray-300 text-gray-200 rounded-lg block w-full p-1.5" placeholder="Your email" onChange={handlechange} ></textarea>

                            </div>
                            <div className=' sm:w-full '>
                                <textarea type="text" name='subject' className="bg-zinc-700 border border-gray-300 text-gray-200 rounded-lg block w-full p-2.5" placeholder="Subject" onChange={handlechange} ></textarea>

                            </div>
                            <div className=' sm:w-full space-y-4'>
                                <label className='text-white text-xl p-2'>Message:</label>
                                <textarea type="text" name='message' className="bg-zinc-700 resize-y border border-gray-300 text-gray-200 rounded-lg block w-full p-2.5" placeholder="Type Here" onChange={handlechange} ></textarea>

                            </div>
                            <div>
                                <button className="px-5 py-2.5 relative rounded group text-white font-medium inline-block" type='submit'>
                                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                    <span className="relative">Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
