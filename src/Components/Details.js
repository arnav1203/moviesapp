import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ReactPlayer from 'react-player';

export default function Details(item) {
    const [detail, setdetail] = useState([]);
    useEffect(() => {
        console.log(item)
        console.log(item.movies._id)
        const apikey = process.env.REACT_APP_XRapidAPIKey;

        const fetchMovies = async () => {
            const url = `https://movies-api14.p.rapidapi.com/movie/${item.movies._id}`;

            const headers = {
                'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
                'X-RapidAPI-Key': apikey,
                'Content-Type': 'application/json',
            };


            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: headers,
                });


                const data = await response.json();
                // console.log(data.movie._id);
                setdetail(data);
                console.log(data.movie._id)
                // console.log(trending.movies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchMovies();
        // console.log(detail.movie._id);
    }, [item])
    // useEffect(() => {
    //     console.log(detail.movie._id)
    // }, [detail])
    return (
        <div className=''>
            <Navbar />
            <div className='no-scrollbar'>
                {/* {props.movies.map((movie, index) => */}
                <div className=' p-8'>
                    <div className='relative'>
                        <img src={item.movies.backdrop_path} className='rounded-3xl h-full w-full object-contain' alt='movie_img' style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 90%)',
                            maskImage: 'linear-gradient(to right, transparent, black 50%)'
                        }} />
                        <div className='absolute inset-8 space-y-5 w-1/3'>
                            <div className='text-4xl text-white'>
                                {item.movies.title}
                            </div>
                            <div className='grid grid-cols-3 gap-0 text-white'>
                                {detail.movie.genres.map((genre, index) => (
                                    <div key={index} className='w-fit'>{genre}</div>
                                ))}
                            </div>
                            <div className='text-white'>
                                {item.movies.overview}
                            </div>
                            <div className=' text-white'>
                                Release Date: {item.movies.release_date}
                            </div>
                        </div>
                    </div>
                    {detail && detail.movie && (
                        <div className='lg:h-[800px] h-96 py-8 '>
                            <ReactPlayer url={detail.movie.youtube_trailer} width='100%' height='100%' />
                        </div>
                    )}
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
