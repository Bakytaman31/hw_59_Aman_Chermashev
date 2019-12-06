import React, { Component } from 'react';
import MovieRemote from "../../Components/Movie/MovieRemote/MovieRemote";
import MovieList from "../../Components/Movie/MovieList/MovieList";

class Movie extends Component {
    state = {
        name: '',
        movies:[]
    };
    getMovieName = event =>{
        this.setState({name: event.target.value});
    };
    changeInput = (event,index) => {
        let lol = [...this.state.movies];
        lol[index] = event.target.value;
        this.setState({movies : lol});
    };
    addMovie = () =>{
        const movies = [...this.state.movies];
        movies.push(this.state.name);
        this.setState({movies});
    };
    removeMovie = index => {
        const movies = [...this.state.movies];
        movies.splice(index, 1);
        this.setState({movies})
    };

    render() {
        return(
            <div className="Movie">
                <MovieRemote
                    getMovieName={this.getMovieName}
                    addMovie={this.addMovie}
                />
                <MovieList
                    movies={this.state.movies}
                    changeInput={this.changeInput}
                    removeMovie={this.removeMovie}
                />
            </div>
        )
    }
}

export default Movie;