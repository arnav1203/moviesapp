import React, { useEffect } from 'react'

export default function Details(props) {
    // useEffect(() => {
    //     console.log(item)
    // })
    return (
        <div className=''>
            <div className='no-scrollbar mr-5'>
                {/* {props.movies.map((movie, index) => */}
                <div className='flex mt-24 ml-24'>
                    <div className='h-72 w-60 hover:scale-110 p-3'>
                        <img src={props.movies.movie.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
                    </div>
                    <div className='space-y-5 w-1/3'>
                        <div className='text-3xl text-white underline'>
                            <a href={props.movies.movie.youtube_trailer}>Trailer</a>
                        </div>
                        <div className='text-white'>
                            {props.movies.movie.overview}
                        </div>
                        <div className=' text-white'>
                            Release Date: {props.movies.movie.release_date}
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
