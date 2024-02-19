import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Animated from './Components/Animated';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Footer from './Components/Footer';


function App() {
  const [searchdata, setsearchdata] = useState('')

  const [trend, settrend] = useState([]);
  const [newm, setnewm] = useState([]);
  const [anim, setanim] = useState([]);
  const [f, sf] = useState(false);
  const [click, setclick] = useState([]);
  const apikey = process.env.REACT_APP_XRapidAPIKey;


  useEffect(() => {
    const fetchMovies = async () => {
      const url = 'https://movies-api14.p.rapidapi.com/home';

      // const headers = {
      //   'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
      //   'X-RapidAPI-Key': apikey,
      //   'Content-Type': 'application/json',
      // };


      try {
        const response = await fetch(url, {
          method: 'GET',
          // headers: headers,
        });


        const data = await response.json();

        let trending;

        if (searchdata) {
          trending = data.find(entry => entry.title === 'Trending Movies')
          let m = trending.movies.find(entry => entry.title.toLowerCase().includes(searchdata))
          if (!m) {
            trending = data.find(entry => entry.title === 'New Movies')
            m = trending.movies.find(entry => entry.title.toLowerCase().includes(searchdata))
          }
          if (!m) {
            trending = data.find(entry => entry.title === 'Best Animation Movies')
            m = trending.movies.find(entry => entry.title.toLowerCase().includes(searchdata))
          }
          if (m)
            settrend([m]);
          else
            console.log("Nothing to Display")

        }
        else {
          trending = data.find(entry => entry.title === 'Trending Movies')
          settrend(trending.movies);
        }
        const newmovies = data.find(entry => entry.title === 'New Movies')
        const animated = data.find(entry => entry.title === 'Best Animation Movies')


        setnewm(newmovies.movies);
        setanim(animated.movies);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [searchdata]);


  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
    sf(true);
  };

  const handleclick = (movie) => {
    setclick(movie);
  }
  const tip = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/' element={<div>
            <Navbar onSearch={handlesearch} />
            {<MoviesList movies={trend} onSearch={handleclick} />}
            {f ? '' : <FavouritesList movies={newm} onSearch={handleclick} />}
            {f ? '' : <Animated movies={anim} onSearch={handleclick} />}
            {<Footer onClick={tip} />}
          </div>} />
        <Route path='/details' element={<Details movies={click} onSearch={handleclick} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
