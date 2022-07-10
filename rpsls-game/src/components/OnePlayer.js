import { React, useState } from 'react';
import { Link } from "react-router-dom";

class Choice {
    canWin(otherPlayerChoice) {
        return this.winsAgainst.includes(otherPlayerChoice.name);
    }

    equals(otherPlayerChoice) {
        return this.name === otherPlayerChoice.name;
    }

}

class Rock extends Choice {
    constructor() {
        super();
        this.name = "Rock";
        this.winsAgainst = ["Lizard", "Scissors"];
    }
}

class Paper extends Choice {
    constructor() {
        super();
        this.name = "Paper";
        this.winsAgainst = ["Rock", "Spock"];
    }
}

class Scissors extends Choice {
    constructor() {
        super();
        this.name = "Scissors";
        this.winsAgainst = ["Paper", "Lizard"];
    }
}

class Lizard extends Choice {
    constructor() {
        super();
        this.name = "Lizard";
        this.winsAgainst = ["Spock", "Paper"];
    }
}

class Spock extends Choice {
    constructor() {
        super();
        this.name = "Spock";
        this.winsAgainst = ["Scissors", "Rock"];
    }
}

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
        const randomNumber = Math.floor(Math.random() * possibleChoices.length);
        const randomChoiceComputer = possibleChoices[randomNumber];
        setComputerChoice(randomChoiceComputer);
        return randomChoiceComputer;
    }

    function evaluateRound(playerChoice, computerChoice) {
        console.log("ELIGIO EL JUGADOR", playerChoice);
        console.log("ELIGIO LA PC", computerChoice);

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
        await load(3000);
        setComputerChoice("");
        setPlayerChoice("");
    }

    return (
        <div>
            <div>Player Points: {playerPoints}</div>
            <div>Computer Points: {computerPoints}</div>
            <div>
                {[new Rock(), new Paper(), new Scissors(), new Lizard(), new Spock()]
                    .map(choice =>
                        <button key={choice.name} onClick={() => play(choice)}>{choice.name}</button>)}
            </div>
            <div>
                <p>Player Choice: {playerChoice ? playerChoice.name : "nada"}</p>
                <p>Computer Choice: {computerChoice ? computerChoice.name : "nada"}</p>
                <p>Actual Result: {result}</p>
            </div>
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default OnePlayer;