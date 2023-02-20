import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGuess from './InputGuess'
import GuessResults from './GuessResults';
import Success from '../Success';
import Failure from '../Failure';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(['     ', '     ', '     ', '     ', '     ',]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [guess, setGuess] = React.useState('');
  const maxGuesses = 5

  function handleGuessSubmitted(guess) {
    if (!guesses.includes(guess)) {
      const nextGuesses = [...guesses];
      nextGuesses[guessCount] = guess;
      setGuesses(nextGuesses);
      setGuessCount(guessCount + 1);
      setGuess('');
    }
  }

  console.log(guessCount);
  console.log(guesses[guessCount - 1]);

  return (
    <div>
      <GuessResults guesses={guesses} answer={answer} />
      <InputGuess guess={guess} setGuess={setGuess} handleGuessSubmitted={handleGuessSubmitted} />
      {guessCount <= maxGuesses && guesses[guessCount - 1] === answer && (
        <Success guessCount={guesses.length} />
      )}
      {guessCount >= maxGuesses && guesses[guessCount - 1] !== answer && (
        <Failure answer={answer} />
      )}

    </div>);
}

export default Game;
