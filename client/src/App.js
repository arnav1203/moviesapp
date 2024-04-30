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
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import SearchList from './Components/SearchList';


function App() {
  const [searchdata, setsearchdata] = useState('')
  const [typedata, settypedata] = useState('')
  const [results, setresults] = useState([])

  const [trend, settrend] = useState([]);
  const [newm, setnewm] = useState([]);
  const [anim, setanim] = useState([]);
  const [f, sf] = useState(false);
  const [click, setclick] = useState([]);
  const apikey = process.env.REACT_APP_XRapidAPIKey;


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
        console.log(data);

        let trending;

        if (typedata) {
          // console.log(typedata);
          trending = data.find(entry => entry.title === 'Trending Movies')
          let m = trending.movies.filter(entry => entry.title.toLowerCase().includes(typedata))
          if (!m) {
            trending = data.filter(entry => entry.title === 'New Movies')
            m = m + trending.movies.filter(entry => entry.title.toLowerCase().includes(typedata))
          }
          if (!m) {
            trending = data.filter(entry => entry.title === 'Best Animation Movies')
            m = m + trending.movies.filter(entry => entry.title.toLowerCase().includes(typedata))
          }
          if (m) {
            console.log(m);
            setresults(m);
          }
          else
            console.log("Nothing to Display")
        }

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
  }, [searchdata, typedata]);


  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
    sf(true);
  };

  const handledisp = (typedvalue) => {
    // console.log(typedvalue);
    settypedata(typedvalue);
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
        <Route path='/' element={<Login />} />
        <Route
          path='/home' element={<div>
            <Navbar onSearch={handlesearch} onType={handledisp} />
            {/* <SearchList results={results} /> */}
            {<MoviesList movies={trend} onSearch={handleclick} />}
            {f ? '' : <FavouritesList movies={newm} onSearch={handleclick} />}
            {f ? '' : <Animated movies={anim} onSearch={handleclick} />}
            {<Footer onClick={tip} />}
          </div>} />
        <Route path='/details' element={<Details movies={click} onSearch={handleclick} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
