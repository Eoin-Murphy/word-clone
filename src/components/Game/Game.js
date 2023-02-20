import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGuess from './InputGuess'
import GuessResults from './GuessResults';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmitted(guess){
    setGuesses([...guesses, guess]);
  }

  return (
  <div>
    <GuessResults guesses={guesses}/>
    <InputGuess handleGuessSubmitted={handleGuessSubmitted}/>
  </div>);
}

export default Game;
