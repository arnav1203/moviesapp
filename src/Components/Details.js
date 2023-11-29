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
            <div className='no-scrollbar mr-5'>
                {/* {props.movies.map((movie, index) => */}
                <div className=' mt-10 mx-24 '>
                    <div class="relative">
                        <img src={item.movies.backdrop_path} class="w-full h-auto" alt="movie_img" />
                        <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                            <div class="text-3xl underline">
                                {item.movies.title}
                            </div>
                            <div class="mt-3">
                                {item.movies.overview}
                            </div>
                            <div class="mt-3">
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
