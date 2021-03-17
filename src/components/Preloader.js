import React from 'react';
import './MovieStyles.css';
import gif from '../810.gif';

function Preloader(props) {
    return (
        <div className={props.active ? 'preloader active' : 'preloader'}>
            <img src={gif}/>
        </div>
    )
}

export default Preloader
