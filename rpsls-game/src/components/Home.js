import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Rock, Paper, Scissors, Lizard, Spock!</h2>

            <div className="one-player">
                <Link to={'/one-player'}>
                    <button className="button">Player vs. Computer</button>
                </Link>
            </div>

            <div className="multiplayer">
                <Link to={'/multiplayer'}>
                    <button className="button">Multiplayer!</button>
                </Link>
            </div>

            <div className="rules">
                <Link to={'/rules'}>
                    <button className="button">Rules</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;