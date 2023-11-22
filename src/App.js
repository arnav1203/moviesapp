import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';
import Details from './Components/Details';


function App() {
  const [searchdata, setsearchdata] = useState('')
  const [movies, setMovies] = useState([]);
  const [found, setfound] = useState([]);
  const apikey = process.env.REACT_APP_XRapidAPIKey;
  // console.log(apikey);
  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/movies';

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
        setMovies(data.movies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    const filtered_movies = movies.find((movie) => movie.title.toLowerCase() === searchdata.toLowerCase
      ());

    setfound(filtered_movies);
    // console.log(filtered_movies);
    fetchMovies();
  }, [searchdata]);


  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
  };
  // console.log(found);
  // const responseJson = response.json();
  // console.log(responseJson.data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<div>
            <Navbar onSearch={handlesearch} />
            <MoviesList movies={found} />
            <FavouritesList movies={movies} />
          </div>} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
