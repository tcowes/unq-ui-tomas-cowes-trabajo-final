import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rock, Paper, Scissors, Lizard, Spock } from './Choice';
import { load, waiting } from '../utils/Utils';
import '../styles/Player.css';

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
            <p>Player 1 Points: {playerOnePoints}</p>
            <p>Player 2 Points: {playerTwoPoints}</p>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button
                            key={choice.name}
                            className={"choice-img choice-img--" + choice.name}
                            onClick={() => setPlayerOneChoice(choice)}
                            disabled={playerOneChoice !== ""}>
                        </button>)}
            </div>
            {result === "" ?
                <div className='messageText'>Player One: {
                    playerOneChoice ? waiting("WAITING FOR PLAYER TWO") : waiting("DIDN'T CHOSE YET")}</div>
                :
                <div className='messageText'>Player One Choice: {playerOneChoice.name}</div>
            }
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button
                            key={choice.name}
                            className={"choice-img choice-img--" + choice.name}
                            onClick={() => setPlayerTwoChoice(choice)}
                            disabled={playerTwoChoice !== ""}>
                        </button>)}
            </div>
            {result === "" ?
                <div className='messageText'>Player Two: {
                    playerTwoChoice ? waiting("WAITING FOR PLAYER ONE") : waiting("DIDN'T CHOSE YET")}</div>
                :
                <div className='messageText'>Player Two Choice: {playerTwoChoice.name}</div>
            }
            {result ? <p className='lineUp'>Result: {result}</p> : null}
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default Multiplayer;