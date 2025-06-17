import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./MovieCard.css"

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
       <Card style={{ width: '300px', height:'800px'}}>
      <Card.Img variant="top" src={movie.posterUrl} style={{ width: '300px' , height:'500px'}} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
