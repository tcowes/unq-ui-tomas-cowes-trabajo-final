import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rock, Paper, Scissors, Lizard, Spock } from './Choice'

const Multiplayer = () => {
    const [result, setResult] = useState("");

    const [playerOneChoice, setPlayerOneChoice] = useState("");
    const [playerOnePoints, setPlayerOnePoints] = useState(0);

    const [playerTwoChoice, setPlayerTwoChoice] = useState("");
    const [playerTwoPoints, setPlayerTwoPoints] = useState(0);

    function evaluateRound(playerOneChoice, playerTwoChoice) {
        if (playerOneChoice?.canWin(playerTwoChoice)) {
            setPlayerOnePoints(playerOnePoints + 1);
            setResult("Player one won!");
        } else if (playerOneChoice?.equals(playerTwoChoice)) {
            setResult("It's a tie!");
        } else {
            setPlayerTwoPoints(playerTwoPoints + 1);
            setResult("Player two won!");
        }
    }

    function load(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        if (playerOneChoice !== "" && playerTwoChoice !== "") {
            play(playerOneChoice, playerTwoChoice);
        }
    }, [playerOneChoice, playerTwoChoice]);

    async function play(playerOneChoice, playerTwoChoice) {
        setResult("");
        evaluateRound(playerOneChoice, playerTwoChoice);
        await load(2000);
        setPlayerOneChoice("");
        setPlayerTwoChoice("");
        setResult("");
    }

    return (
        <div>
            <div>Player 1 Points: {playerOnePoints}</div>
            <div>Player 2 Points: {playerTwoPoints}</div>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button key={choice.name} onClick={() => setPlayerOneChoice(choice)} disabled={playerOneChoice !== ""}>{choice.name}</button>)}
            </div>
            <p>Player One Choice: {playerOneChoice ? "WAITING FOR PLAYER TWO" : "DIDN'T CHOSE"}</p>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button key={choice.name} onClick={() => setPlayerTwoChoice(choice)} disabled={playerTwoChoice !== ""}>{choice.name}</button>)}
            </div>
            <p>Player Two Choice: {playerTwoChoice ? "WAITING FOR PLAYER ONE" : "DIDN'T CHOSE"}</p>
            {result ? <p>Actual Result: {result}</p> : null}
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default Multiplayer;