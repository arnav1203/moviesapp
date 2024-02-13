import React from 'react'

export default function Contact() {
    return (
        <div className='flex justify-center pt-24'>
            <div className='flex flex-col justify-center w-1/2'>
                <div>
                    <h1 className='text-4xl text-white'>Contact Us</h1>
                </div>
                <div>
                    <p className='text-white'>Please submit your enquiry using the form below and we will get in touch with you shortly.</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <form>
                        <div className='p-3 sm:w-full pb-3'>
                            <textarea type="text" id="first_name" className="bg-zinc-700 border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Your email" ></textarea>

                        </div>
                        <div className='p-3 sm:w-full pb-3'>
                            <textarea type="text" id="first_name" className="bg-zinc-700 border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Subject" ></textarea>

                        </div>
                        <div className='p-3 sm:w-full space-y-4'>
                            <label className='text-white text-xl p-2'>Message:</label>
                            <textarea type="text" id="first_name" className="bg-zinc-700 resize-y border border-gray-300 text-gray-300 rounded-lg block w-full p-2.5" placeholder="Type Here" ></textarea>

                        </div>
                        <div>
                            <a href="#_" class="px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span class="relative">Button Text</span>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
