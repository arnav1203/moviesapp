import React from 'react'

export default function Details(props) {
    return (
        <div className='flex justify-center items-center'>
            <div className='no-scrollbar mr-5'>
                {props.movies.map((movie, index) =>
                    <div className='flex justify-center'>
                        <div className='h-72 w-60 hover:scale-110 p-3'>
                            <img src={movie.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
                        </div>
                        <div className='space-y-5 w-2/3'>
                            <div className='text-3xl text-white underline'>
                                {movie.title}
                            </div>
                            <div className='text-white'>
                                {movie.overview}
                            </div>
                            <div className=' text-white'>
                                Release Date: {movie.release_date}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
