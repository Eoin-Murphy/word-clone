import React from 'react';

function InputGuess({ guess, setGuess, handleGuessSubmitted }) {

    const handleLetterEntered = (e) => {
        setGuess(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.length === 5) {
            handleGuessSubmitted(guess);
        }
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guessInput">Enter Guess:</label>
            <input value={guess} autoFocus={true} onChange={handleLetterEntered} id="guessInput" type="text" maxLength={5}></input>
        </form>
    );
}

export default InputGuess;