import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies.jsx';
import {movies, savedMovies} from '../../utils/movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';

function App() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false)

  function onClickBurger(isBurgerOpened) {
    setIsBurgerOpened(!isBurgerOpened);
  }
  return (
    <div className="app">
      <Routes>
        <Route path='/' exact element={<Main isBurgerOpened={isBurgerOpened}  loggedIn={false} onClickBurger={onClickBurger}/>} />
      </Routes>
      <Routes>
        <Route path='/movies' exact element={<Movies movies={movies} isBurgerOpened={isBurgerOpened}  loggedIn={true} onClickBurger={onClickBurger}/>} />
      </Routes>
      <Routes>
        <Route path='/saved-movies' exact element={<SavedMovies savedMovies={savedMovies} isBurgerOpened={isBurgerOpened}  loggedIn={true} onClickBurger={onClickBurger}/>} />
      </Routes>
      <Routes>
        <Route path='/profile' exact element={<Profile isBurgerOpened={isBurgerOpened}  loggedIn={true} onClickBurger={onClickBurger}/>} />
      </Routes>
    </div>
  );
}

export default App;
