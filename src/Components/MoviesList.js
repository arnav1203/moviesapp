import React from 'react'

export default function MoviesList(props) {
    return (
        <div className='mt-10 ml-4'>
            <div className='text-4xl text-white'>
                MOVIE LIST
            </div>
            <div className='flex flex-wrap'>
                {props.movies.map((movie, index) =>
                    <div className='h-72 w-44 p-3' key={index}>
                        <img src={movie.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
                    </div>)}
            </div>
        </div>
    )
}
