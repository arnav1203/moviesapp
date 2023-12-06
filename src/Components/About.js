import React from 'react'
import Navbar from './Navbar'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='p-8'>
                <div className='text-5xl text-white'>
                    About
                </div>
                <div>
                    <div className='text-2xl text-white'>
                        Welcome to CineScopeHub, the ultimate movie hub designed for every cinephile! Our platform is a passionate endeavor to bring together the world of cinema in one seamless space. Discover, explore, and immerse yourself in a treasure trove of movies, from trending blockbusters to new releases and timeless animated wonders. Whether you seek movie details, trailers, or simply want to indulge your cinematic curiosity, CineScopeHub is your go-to destination. Join us on this cinematic journey where every movie lover finds their story!
                    </div>
                </div>
            </div>
        </div>
    )
}
