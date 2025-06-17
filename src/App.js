import React, {useState } from 'react';
import './App.css';
import MovieList from "./Components/MovieList/MovieList";
import { moviesData } from './data';
import FilterByName from './Components/FilterByName/FilterByName';
import AddMovie from './Components/AddMovie/AddMovie';
import Rating from './Components/Rating/Rating';

function App() {
    
    const [movies , setmovie]=useState(moviesData)
    const [inputSearch , setInputSearch]=useState("")
    const [rating , setRating]=useState(1);
    
    //add
    const add=(newMovie) => {
      setmovie([...movies,newMovie]);
    }

  return (
    <div className="App">
      <h1>Check Point Hooks</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} />
       <Rating rating={rating} setRating={setRating} />
       <AddMovie add={add} />
       <MovieList  movies={movies} inputSearch={inputSearch} rating={rating}/>
    </div>
  );
}

export default App;
