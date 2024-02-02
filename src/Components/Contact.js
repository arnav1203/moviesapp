import React from 'react'

export default function Contact() {
    return (
        <div className='flex flex-col w-1/2'>
            <div>
                <h1 className='text-4xl text-white'>Contact Us</h1>
            </div>
            <div>
                <p className='text-white'>Please submit your inquiry using the form below and we will get in touch with you shortly.</p>
            </div>
            <div className='flex flex-col justify-center'>
                <form>
                    <div className='p-3 sm:w-full pb-3'>
                        <textarea type="text" id="first_name" className="bg-zinc-700 border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Your email" ></textarea>

                    </div>
                    <div className='p-3 sm:w-full pb-3'>
                        <textarea type="text" id="first_name" className="bg-zinc-700 border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Subject" ></textarea>

                    </div>
                    <div className='p-3 sm:w-full pb-3'>
                        <label className='text-gray-400 text-xl p-2'>Message:</label>
                        <textarea type="text" id="first_name" className="bg-zinc-700 resize-y border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Type Here" ></textarea>

                    </div>
                </form>
            </div>
        </div>
    )
}
