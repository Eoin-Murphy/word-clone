import React from 'react';

function GuessResults({guesses, answer}) {

    const getClass = (char, index) => {
        if(answer[index] === char){
            return 'cell correct';
        }
        if (answer.includes(char)){
            return 'cell misplaced'
        }
        return 'cell incorrect';
    };

    return (
        <div className="guess-results">
        {guesses.map((guess) => 
        <p key={Math.random()} className="guess">
            {[...guess].map((char, index) => 
                <span className={getClass(char, index)} key={Math.random()}>{char}</span>
            )}
        </p>
        )}
        </div>
    );
}

export default GuessResults;