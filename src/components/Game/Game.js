import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGuess from './InputGuess'

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  return (
  <div>
    <InputGuess />
  </div>);
}

export default Game;
