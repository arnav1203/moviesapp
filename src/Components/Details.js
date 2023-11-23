import React, { useEffect } from 'react'

export default function Details(item) {
    useEffect(() => {
        console.log(item)
    })
    return (
        <div className='h-screen'>
            <div className='no-scrollbar mr-5'>
                {/* {props.movies.map((movie, index) => */}
                <div className='flex mt-24 ml-24'>
                    <div className='h-72 w-60 hover:scale-110 p-3'>
                        <img src={item.movies.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
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
