import './App.css';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import React, { Component } from 'react'
import axios from 'axios';
import Preloader from './components/Preloader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genres: [],
      renderPopup: false,
      preloader: false,
      value: '',
      page: 1
    };
  }


  togglePopup = (e) => {
    if(e.target.className !== 'popup-background') {
      this.setState({
        renderPopup: !this.state.renderPopup
      })
    }
  }

  search = async () => {
    this.setState({
      preloader: true
    })
    const data = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=20b8483892cb2b88bda446f8ba1224a5&language=en-US&query=${this.state.value}&page=${this.state.page}&include_adult=false`);
    this.setState({
      preloader: false,
      movies: [...this.state.movies, 
        ...data.data.results.map(movie => {
        return {
            ...movie, 
            genre_ids: movie?.genre_ids?.map(genre => this.state.genres.get(genre) === undefined ? '' : this.state.genres.get(genre))
        }
      })]
    });
  }

   async componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if(e.target.scrollingElement.offsetHeight - e.target.scrollingElement.clientHeight === e.target.scrollingElement.scrollTop) {
        this.setState({
          page: this.state.page+=1
        }, this.search)
      }
    });
    const genreData = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=20b8483892cb2b88bda446f8ba1224a5&language=en-US`);
    this.setState({
      genres: new Map(genreData.data.genres.map(genre => [genre.id, genre.name]))
    });
  }

  onChangeHandler = async e => {
    if(e.key === 'Enter') {
      this.setState({
        value: e.target.value, 
        movies: []
      }, this.search);
    }
  };


  render() {
    return (
      <div className="App">
        <Filter onChange={this.onChangeHandler}/>
        <MovieList movies={this.state.movies}/>
        <Preloader active={this.state.preloader}/>
      </div>
    )
  }
}

export default App