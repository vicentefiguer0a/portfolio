import React, { useEffect } from 'react';
import '../styles/game.css'

const GuessingGame = () => {
    let myNumber = Math.floor(Math.random() * (21 - 1) + 1);
    let score = 20;
    let highscore = 0;

    const displayMessage = (message) => {
        document.querySelector('.message').textContent = message;
    }

    const checkNumber = () => {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            displayMessage("No number detected...");
        } else if (guess === myNumber) {
            document.querySelector('.number').textContent = "Winner";
            displayMessage("Correct number!");
            document.querySelector('.body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '40rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else if (guess !== myNumber) {
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage("You lost the game :(");
                document.querySelector('.body').style.backgroundColor = '#d1001f';
                document.querySelector('.score').textContent = 0;
            }
        }
    }

    const playAgain = () => {
        score = 20;
        myNumber = Math.floor(Math.random() * (21 - 1) + 1);
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = "";
        displayMessage("Difficulty: Impossible");
        document.querySelector('.body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
    }

    //TODO: Complete guessing game UI & functionality.
    return (
        <div className="all">
            <div className="body">
                <div className="header">
                    <p className="game-difficulty">Congratulations! You found my guessing game!</p>
                    <p className="game-title">Guess My Number</p>
                    <p className="between">(Between 1 and 20)</p>
                    <button className="btn again" onClick={playAgain}>Again!</button>
                    <div className="number">?</div>
                </div>

                <div className="main">
                    <div className="left">
                        <input type="number" className="guess" />
                        <button className="check btn" onClick={checkNumber}>Check!</button>
                    </div>

                    <div className="right">
                        <p className="message">Difficulty: Impossible</p>
                        <p className="label-score">Score: <span className="score">20</span></p>
                        <p className="label-highscore">Highscore: <span className="highscore">0</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuessingGame;