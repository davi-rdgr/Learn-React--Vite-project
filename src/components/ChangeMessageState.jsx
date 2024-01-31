import React from 'react'

const ChangeMessageState = ({ handleMessege }) => {
    const messages = ["oi", "olá", "oi", "opa"]
    return (
        <>
            <button onClick={() => handleMessege(messages[0])}>1</button>
            <button onClick={() => handleMessege(messages[1])}>2</button>
            <button onClick={() => handleMessege(messages[2])}>3</button>
            <button onClick={() => handleMessege(messages[3])}>4</button>
        </>
    )
}

export default ChangeMessageState
