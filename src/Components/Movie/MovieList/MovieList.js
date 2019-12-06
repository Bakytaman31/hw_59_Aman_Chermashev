import React from 'react';

const MovieList = props => {
    return (
        <div className="list">
            {props.movies.map((movieName, index) => {
                return(
                    <div key={index}>
                        <input
                            type="text"
                            onChange={(event) => props.changeInput(event,index)}
                            value={props.movies[index]}/>
                        <button onClick={() => props.removeMovie(index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
};

export default MovieList;