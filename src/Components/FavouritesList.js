import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function FavouritesList(props) {
    const navigate = useNavigate();
    const { onSearch } = props;
    const handleclick = (movie) => {
        onSearch(movie);
        navigate('/details')
    }
    return (
        <div className='mt-10 ml-4'>
            <div className='text-4xl text-white'>
                FAVOURITES
            </div>
            <div className='flex flex-nowrap overflow-x-auto no-scrollbar mr-5'>
                {props.movies.map((movie, index) =>
                    <div key={index} onClick={() => { handleclick(movie) }}>
                        <div className='h-72 w-44 hover:scale-110 p-3'>
                            <img src={movie.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
                        </div>
                        <div className='space-y-2'>
                            <div className='text-white'>
                                {movie.title}
                            </div>
                            <div className='text-white'>
                                {new Date(movie.release_date).getFullYear()}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
