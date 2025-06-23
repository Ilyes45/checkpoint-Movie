import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./MovieCard.css"
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
       <Card style={{ width: '300px', height:'800px'}}>
      <Card.Img variant="top" src={movie.posterUrl} style={{ width: '300px' , height:'500px'}} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Rating isRating={true} movieRating={movie.rate} />
        <div>
        <Link to={`/movie/${movie.id}`} state={movie}>
          <Button variant="info" >Description</Button>{" "}
      </Link>
      </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
