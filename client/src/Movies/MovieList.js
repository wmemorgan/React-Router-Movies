import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import MovieCard from './MovieCard'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios
      .get(`${API_ENDPOINT}.netlify/functions/server/api/movies`)
      .then(response => {
        this.setState(() => ({ movies: response.data }))
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    )
  }
}
