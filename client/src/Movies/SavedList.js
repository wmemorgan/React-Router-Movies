import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class SavedList extends Component {
  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span key={movie.id} className="saved-movie">
            <NavLink 
              to={`/movies/${movie.id}`}
              activeClassName="saved-active"
            >
              {movie.title}
            </NavLink>
            
          </span>
        ))}
        <div className="home-button">
          <NavLink to="/">
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
