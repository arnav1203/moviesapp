import React, { useEffect } from 'react'
import Navbar from './Navbar'

export default function Details(item) {
    useEffect(() => {
        console.log(item)
    })
    return (
        <div className=''>
            <Navbar />
            <div className='no-scrollbar mr-5'>
                {/* {props.movies.map((movie, index) => */}
                <div className=' mt-24 ml-24 '>
                    <div className='h-96 w-full flex justify-center p-3'>
                        <img src={item.movies.backdrop_path} className='h-full w-3/4 object-contain' alt='movie_img'></img>
                    </div>
                    <div className='space-y-5 w-1/3'>
                        <div className='text-3xl text-white underline'>
                            {item.movies.title}
                        </div>
                        <div className='text-white'>
                            {item.movies.overview}
                        </div>
                        <div className=' text-white'>
                            Release Date: {item.movies.release_date}
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
