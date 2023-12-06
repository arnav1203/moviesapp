import React from 'react'
import Navbar from './Navbar'
import logo from './assets/3365444_1701-removebg-preview.png'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='p-8'>
                <div className='flex justify-around'>
                    <div className='w-1/2 space-y-7'>
                        <div className='text-5xl text-white'>
                            About
                        </div>
                        <div className='text-2xl tracking-widest text-white space-y-4'>
                            <p>At CineScopeHub, we're committed to delivering a comprehensive cinematic experience. Beyond showcasing trending blockbusters and the freshest releases, we take pride in curating an eclectic collection that includes the charm of animated masterpieces and the enduring allure of classics.</p>
                            <p>
                                Our platform isn't just about information; it's a vibrant community where movie enthusiasts converge, sharing insights, discussing favorites, and uncovering hidden treasures. Join us on this cinematic journey, where every frame tells a story, and every user becomes an integral part of our ever-evolving movie-loving family.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}
