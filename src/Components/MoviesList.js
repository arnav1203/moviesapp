import React, { useEffect } from 'react'

export default function MoviesList(item) {
    useEffect(() => {
        // console.log(props.movies)
        // if (props.movies !== undefined)
        //     console.log(props.movies.length)
        console.log(item);

    }, [item])
    return (
        <div className='mt-10 ml-4'>
            <div className='text-4xl text-white'>
                MOVIE LIST
            </div>
            <div className='flex flex-nowrap overflow-x-auto no-scrollbar mr-5'>
                {/* {props.movies.map((movie, index) => */}
                <div >
                    <div className='h-72 w-44 hover:scale-110 p-3'>
                        <img src={item.movies.poster_path} className='h-full w-full object-cover' alt='movie_img'></img>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-white'>
                            {item.movies.title}
                        </div>
                        <div className='text-white'>
                            {new Date(item.movies.release_date).getFullYear()}
                        </div>
                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
