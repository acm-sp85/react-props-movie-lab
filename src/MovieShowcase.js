import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return (
      <div>

        {movieData.map((movie) => 
  
        <div>
          <MovieCard title={movie.title} genres={movie.genres} IMDBRating={movie.IMDBRating} poster={movie.poster}/>

        </div>
        )
        }
      </div>

    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
