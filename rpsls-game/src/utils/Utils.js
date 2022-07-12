import '../styles/Spinner.css';

function load(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waiting(messageToDisplay) {
    return (
        <div className='waitingMessage'>
            <div>{messageToDisplay}</div>
            <div className='spinner'></div>
        </div>
    )
}

export {
    load, waiting
}