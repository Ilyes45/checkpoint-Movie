import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css"
const MovieList = ({movies,inputSearch,rating}) => {
  return (
    <div className='movie-list'>
      {
        movies
        .filter(
          (el) =>
            el.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
            el.rate >= rating

        
    )
        .map((el) => (
        <MovieCard movie={el} key={el.id} />
    ))}
    </div>
  )
}

export default MovieList
