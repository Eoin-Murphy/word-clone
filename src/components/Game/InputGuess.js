import  React from 'react';

function InputGuess() {
    const [guess, setGuess] = React.useState('');
    console.log(guess);

    const handleLetterEntered = (e) => {
        setGuess(e.target.value.toUpperCase().replace(/[^A-Z]/g, ''));
    }

    return (
        <form className="guess-input-wrapper">
            <label htmlFor="guessInput">Enter Guess:</label>
            <input value={guess} onChange={handleLetterEntered} id="guessInput" type="text" maxLength={5}></input>
        </form>
    );
}

export default InputGuess;