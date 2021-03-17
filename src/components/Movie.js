import React from 'react';
import './MovieStyles.css';

function Movie(props) {
    return (
        <React.Fragment>
            <div className="movie-field">
                <img className="cover" src={`https://image.tmdb.org/t/p/w500` + props.data.poster_path} />
                <h1 className="name-film">{props.data.original_title}</h1>
                <p className="date">{props.data.release_date}</p>
                <p className="genre">{props.data.genre_ids?.join(', ')}</p>
                <p className="description">{props.data.overview}</p>
            </div>
        </React.Fragment>
    )
}

export default Movie
