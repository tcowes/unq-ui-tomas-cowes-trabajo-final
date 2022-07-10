import React from 'react';
import { Link } from "react-router-dom";
import rulesImg from "../assets/rpsls.png"

const Rules = () => {
    return (
        <div>
            <img src={rulesImg} height="300px"></img>
            <div>
                <Link to={'/'}>
                    <button className="button">Go to home</button>
                </Link>
            </div>
        </div>
    )
}

export default Rules;