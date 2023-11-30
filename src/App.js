import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Animated from './Components/Animated';
import Navbar from './Components/Navbar';
import Details from './Components/Details';


function App() {
  const [searchdata, setsearchdata] = useState('')

  const [trend, settrend] = useState([]);
  const [newm, setnewm] = useState([]);
  const [anim, setanim] = useState([]);

  const [found, setfound] = useState([]);
  const [f, sf] = useState(false);
  const [click, setclick] = useState([]);
  const apikey = process.env.REACT_APP_XRapidAPIKey;
  // console.log(apikey);


  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/home';

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
        let trending;
        if (searchdata) {
          console.log(searchdata);
          trending = data.find(entry => entry.title === 'Trending Movies')
          const m = trending.movies.find(entry => entry.title === searchdata)
          console.log(m);
          settrend(m);

        }
        else {
          trending = data.find(entry => entry.title === 'Trending Movies')
          settrend(trending.movies);
        }
        const newmovies = data.find(entry => entry.title === 'New Movies')
        const animated = data.find(entry => entry.title === 'Best Animation Movies')


        setnewm(newmovies.movies);
        setanim(animated.movies);

        // console.log(trending.movies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    // const filtered_movies = movies.find((movie) => movie.title.toLowerCase() === searchdata.toLowerCase
    //   ());
    // if (filtered_movies == null) {
    //   setfound(movies);
    // }
    // else {
    //   setfound(filtered_movies);
    // }
    // console.log(filtered_movies);
    fetchMovies();
  }, [searchdata]);


  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
    sf(true);
  };
  // console.log(found);
  // const responseJson = response.json();
  // console.log(responseJson.data);

  const handleclick = (movie) => {
    setclick(movie);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<div>
            <Navbar onSearch={handlesearch} />
            {<MoviesList movies={trend} onSearch={handleclick} />}
            {f ? '' : <FavouritesList movies={newm} onSearch={handleclick} />}
            {f ? '' : <Animated movies={anim} onSearch={handleclick} />}
          </div>} />
        <Route path='/details' element={<Details movies={click} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
