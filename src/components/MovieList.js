import React from 'react'
import Movie from './Movie'
import './MovieStyles.css';

function MovieList(props) {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}} className="movie-scroll">
            {props.movies.map(movie => 
                <Movie data={movie}/>
            )}
        </div>
    )
}

export default MovieList
