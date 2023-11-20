import { useState, useEffect } from 'react';
import './App.css';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';

function App() {
  const [searchdata, setsearchdata] = useState('')
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/movies';

      const headers = {
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
        'X-RapidAPI-Key': 'bb8c3eab3dmsh524ba6b0abcb951p1635ecjsnb51056eb5b11',
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

    fetchMovies();
  }, []);
  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
  };
  // const responseJson = response.json();
  // console.log(responseJson.data);
  return (
    <div className="">
      <Navbar onSearch={handlesearch} />
      <div className='container'>
        <MoviesList movies={movies} />
      </div>
      <FavouritesList />
    </div>
  );
}
export default App;
