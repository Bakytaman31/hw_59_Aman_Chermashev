import React from 'react';

const MovieRemote = props => {
    return (
        <div>
            <input type="text" className="Input" placeholder="Enter a film" onChange={(event) => props.getMovieName(event)}/>
            <button onClick={props.addMovie}>Add Movie</button>
            <p>To watch list</p>
        </div>
    );
};

export default MovieRemote;