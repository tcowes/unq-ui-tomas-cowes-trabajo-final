import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rock, Paper, Scissors, Lizard, Spock } from './Choice';
import { load, waiting } from '../utils/Utils';
import '../styles/Player.css';

const OnePlayer = () => {
    const [result, setResult] = useState("");

    const [playerChoice, setPlayerChoice] = useState("");
    const [playerPoints, setPlayerPoints] = useState(0);
    const [computerChoice, setComputerChoice] = useState("");
    const [computerPoints, setComputerPoints] = useState(0);

    function randomChoice() {
        const possibleChoices = [new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()];
        const randomChoiceComputer = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
        setComputerChoice(randomChoiceComputer);
        return randomChoiceComputer;
    }

    function evaluateRound(playerChoice, computerChoice) {
        if (playerChoice?.canWin(computerChoice)) {
            setPlayerPoints(playerPoints + 1);
            setResult("You won!");
        } else if (playerChoice?.equals(computerChoice)) {
            setResult("It's a tie!");
        } else {
            setComputerPoints(computerPoints + 1);
            setResult("You lost!");
        }
    }

    async function play(newPlayerChoice) {
        setResult("");
        setPlayerChoice(newPlayerChoice);
        await load(1500);
        evaluateRound(newPlayerChoice, randomChoice());
        await load(2000);
        setComputerChoice("");
        setPlayerChoice("");
        setResult("");
    }

    return (
        <div>
            <p>Player Points: {playerPoints}</p>
            <p>Computer Points: {computerPoints}</p>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button
                            className={"choice-img choice-img--" + choice.name}
                            key={choice.name}
                            onClick={() => play(choice)}
                            disabled={playerChoice !== ""}>
                        </button>)}
            </div>
            <div className='messageText'>Player Choice: {
                playerChoice ? playerChoice.name : waiting("DIDN'T CHOSE YET")}</div>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button
                            className={"choice-img choice-img--" + choice.name}
                            key={choice.name}
                            disabled={true}>
                        </button>)}
            </div>
            <div className='messageText'>Computer Choice: {
                computerChoice ? computerChoice.name : waiting("WAITING FOR PLAYER")}</div>
            {result ? <p className='lineUp'>Result: {result}</p> : null}
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default OnePlayer;