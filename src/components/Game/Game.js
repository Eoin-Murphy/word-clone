import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGuess from './InputGuess'
import GuessResults from './GuessResults';
import Success from '../Success';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmitted(guess){
    if(!guesses.includes(guess)){
      setGuesses([...guesses, guess]);
    }
  }

  return (
  <div>
    <GuessResults guesses={guesses}/>
    <InputGuess handleGuessSubmitted={handleGuessSubmitted}/>
    {guesses.length > 0 && guesses[guesses.length - 1] === answer && (
      <Success guessCount={guesses.length} />
    )}

  </div>);
}

export default Game;
