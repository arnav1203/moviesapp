import { useState } from 'react';
import './App.css';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';

function App() {
  let response = fetch('https://movies-api14.p.rapidapi.com/movies', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com',
      'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your actual API key
      'Content-Type': 'application/json',
    }
  }
  )
  const responseJson = response.json();
  console.log(responseJson.data);
  const [searchdata, setsearchdata] = useState('')
  const handlesearch = (searchvalue) => {
    setsearchdata(searchvalue);
  }
  console.log(searchdata);
  return (
    <div className="">
      <Navbar onSearch={handlesearch} />

      <MoviesList />
      <FavouritesList />
    </div>
  );
}

export default App;
