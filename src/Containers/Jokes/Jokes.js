import React, { Component } from 'react';
import nanoid from 'nanoid';

class Jokes extends Component {
    state = {
        jokes:[]
    };
    componentDidMount() {
        this.addJokes(1);
    }

    async addJokes(howMany) {
        let jokes = [];
        for (let i = 0; i < howMany; i++){
            const response =  await fetch('http://api.icndb.com/jokes/random');
            const joke = await response.json();
            let jokeText = {
                text: joke.value.joke,
                id: nanoid(),
            };
            jokes.push(jokeText);
        }
        this.setState({jokes});
    }

    render() {
        return(
            <div className="Jokes">
                {this.state.jokes.map(joke => {
                    return(
                        <span>{joke.text}</span>
                    )
                })}
                <button onClick={() => this.addJokes(5)} className='addJoke'>JOKE</button>
            </div>
        );
    }
}

export default Jokes