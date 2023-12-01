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
                setdetail(data);
                console.log(data.movie._id)
                // console.log(data.similarMovies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchMovies();
    }, [item])

    return (
        <div className=''>
            <Navbar />
            <div className='no-scrollbar'>
                {/* {props.movies.map((movie, index) => */}
                <div className=' p-8'>
                    <div className='xl:relative'>
                        <img src={item.movies.backdrop_path} className='rounded-3xl h-full w-full object-contain' alt='movie_img' style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 90%)',
                            maskImage: 'linear-gradient(to right, transparent, black 50%)'
                        }} />
                        <div className='xl:absolute xl:inset-8  space-y-5 xl:w-1/3'>
                            <div className='xl:pt-40'>
                                <div className='flex pb-7'>
                                    <p className='text-4xl text-white'>{item.movies.title}</p>

                                </div>
                                {detail && detail.movie && (
                                    <div className='grid grid-cols-3 gap-0 text-white w-2/3 xl:w-full'>
                                        {detail.movie.genres.map((genre, index) => (
                                            <div key={index} className='w-fit'>{genre}</div>
                                        ))}
                                    </div>)}
                                <div className=' pt-1 text-white'>
                                    {new Date(item.movies.release_date).getFullYear()}
                                </div>
                            </div>
                            <div className='text-white'>
                                {item.movies.overview}
                            </div>
                            <div className='xl:flex hidden'>
                                <a href="#trailer" class="bg-slate-800 relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-indigo-900 rounded-full shadow-md group">
                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-gray-300 duration-300 -translate-x-full bg-indigo-900 group-hover:translate-x-0 ease">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span class="absolute flex items-center justify-center w-full h-full text-gray-300 transition-all duration-300 transform group-hover:translate-x-full ease">Watch Trailer</span>
                                    <span class="relative invisible">Watch Trailer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {detail && detail.movie && (
                        <div className='lg:h-[800px] h-96 pt-8' id='trailer'>
                            <ReactPlayer url={detail.movie.youtube_trailer} width='100%' height='100%' />
                        </div>
                    )}
                    {/* Similar Movies to add */}
                    <div>
                        {detail && detail.similarMovies && (
                            <div>
                                {detail.similarMovies.map((movi, index) => {
                                    <div>{movi}</div>
                                })}
                            </div>
                        )}

                    </div>
                </div>
                {/* )} */}
            </div>
        </div>
    )
}
