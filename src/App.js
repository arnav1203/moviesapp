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
  );
  const responseJson = response.json();
  return (
    <div className="">
      <Navbar />
      <MoviesList />
      <FavouritesList />
    </div>
  );
}

export default App;
