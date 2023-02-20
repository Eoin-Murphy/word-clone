import  React from 'react';

function InputGuess({handleGuessSubmitted}) {
    const [guess, setGuess] = React.useState('');

    const handleLetterEntered = (e) => {
        var guessValue =e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        if(guessValue.length === 5){
            handleGuessSubmitted(guessValue);
        }
        setGuess(guessValue);
    }

    return (
        <form className="guess-input-wrapper">
            <label htmlFor="guessInput">Enter Guess:</label>
            <input value={guess} onChange={handleLetterEntered} id="guessInput" type="text" maxLength={5}></input>
        </form>
    );
}

export default InputGuess;