import React, { useEffect, useState } from 'react'

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log(props);
        console.log(props.movies);

        if (Array.isArray(props.movies)) {
            setMovies(props.movies);
        } else {
            console.log('props.movies is not an array');
            // Handle the scenario where props.movies is not an array
            // For example, set an empty array as a default value
            setMovies([]);
        }
        console.log(movies);
    }, [props]);
    if (!props.movies) {
        return <p>Loading...</p>; // Or any loading indicator while data is being fetched
    }
    // console.log(props.movies.length)
    return (
        <div className='mt-10 ml-4'>
            <div className='text-4xl text-white'>
                MOVIE LIST
            </div>
            <div className='flex flex-nowrap overflow-x-auto no-scrollbar mr-5'>
                {props.movies && props.movies.length > 0 ? (
                    props.movies.map((movie, index) => (
                        <div key={index} className=''>
                            <div className='h-72 w-44 hover:scale-110 p-3'>
                                <img src={movie.poster_path} className='h-full w-full object-cover' alt='movie_img' />
                            </div>
                            <div className='space-y-2'>
                                <div className='text-white'>{movie.title}</div>
                                <div className='text-white'>{new Date(movie.release_date).getFullYear()}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>
        </div>
    )
}
