import React from 'react'

export default function Details(props) {
    return (
        <div>
            <div className='flex flex-nowrap overflow-x-auto no-scrollbar mr-5'>
                {props.movies.map((movie, index) =>
                    <div className='flex justify-around'>
                        <div>
                            <img src={props.movie.poster_path} alt='poster' />
                        </div>
                        <div>
                            <div className='text-3xl'>
                                {props.movie.title}
                            </div>
                            <div>
                                {props.movie.overview}
                            </div>
                            <div>
                                {props.movie.release_date}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
