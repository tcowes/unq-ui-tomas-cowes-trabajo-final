import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    const options = [
        { className: 'one-player', text: 'Player vs. Computer' },
        { className: 'multiplayer', text: 'Multiplayer!' },
        { className: 'rules', text: 'Rules' },
    ]
    return (
        <div>
            <h2 className='title'>Rock, Paper, Scissors, Lizard, Spock!</h2>
            <div>
                {options.map(option =>
                    <div className={option.className} key={option.className}>
                        <Link to={'/' + option.className} className={option.className} key={option.className}>
                            <button className='button'>{option.text}</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;