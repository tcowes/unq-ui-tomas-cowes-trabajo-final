import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rock, Paper, Scissors, Lizard, Spock } from './Choice'

const OnePlayer = () => {
    const [result, setResult] = useState("");

    const [playerChoice, setPlayerChoice] = useState("");
    const [playerPoints, setPlayerPoints] = useState(0);
    const [computerChoice, setComputerChoice] = useState("");
    const [computerPoints, setComputerPoints] = useState(0);

    function load(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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
        await load(1500);
        setComputerChoice("");
        setPlayerChoice("");
        setResult("");
    }

    return (
        <div>
            <div>Player Points: {playerPoints}</div>
            <div>Computer Points: {computerPoints}</div>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button key={choice.name} onClick={() => play(choice)} disabled={playerChoice !== ""}>{choice.name}</button>)}
            </div>
            <div>
                <p>Player Choice: {playerChoice ? playerChoice.name : "WAITING"}</p>
                <p>Computer Choice: {computerChoice ? computerChoice.name : "WAITING"}</p>
                { result ? <p>Actual Result: {result}</p> : null}
            </div>
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default OnePlayer;