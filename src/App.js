import './App.css';
import FavouritesList from './Components/FavouritesList';
import MoviesList from './Components/MoviesList';
import Navbar from './Components/Navbar';

function App() {
  let f = fetch();
  return (
    <div className="">
      <Navbar />
      <MoviesList />
      <FavouritesList />
    </div>
  );
}

export default App;
