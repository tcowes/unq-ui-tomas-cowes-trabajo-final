import React from 'react';
import { Link } from "react-router-dom";

const Rules = () => {
    return (
        <div>
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default Rules;