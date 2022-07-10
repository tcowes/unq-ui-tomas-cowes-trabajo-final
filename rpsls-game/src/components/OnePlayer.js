import React from 'react';
import { Link } from "react-router-dom";

const OnePlayer = () => {
    return (
        <div>
            <Link to={'/'}>
                <button className="button">Go to home</button>
            </Link>
        </div>
    )
}

export default OnePlayer;