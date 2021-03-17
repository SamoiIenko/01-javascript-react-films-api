import React from 'react';
import './MovieStyles.css';

function Filter(props) {
    return (
        <React.Fragment>
            <input
                placeholder="Write any movie to find it"
                className="search-movies-input"
                onKeyPress={props.onChange}
            />
        </React.Fragment>
    )
}

export default Filter
