import React from 'react';
import { Link } from 'react-router-dom';
import rulesImg from '../assets/images/rules-fixed.png'
import '../styles/Rules.css'

const Rules = () => {
    return (
        <div>
            <img className='rulesImg' src={rulesImg}></img>
            <div>
                <Link to={'/'}>
                    <button className='button'>Go to home</button>
                </Link>
            </div>
        </div>
    )
}

export default Rules;