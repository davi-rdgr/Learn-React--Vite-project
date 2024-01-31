import { useState } from 'react'
import React from 'react'

const ManageData = () => {
    let somedata = 10

    const [number, setNumber] = useState(10)

    return (
        <>
            <div>
                <p>Valor: {somedata}</p>
                <button onClick={() => { somedata = 15 }}>Mudar Valor</button>
            </div>

            <div>
                <p>Valor:{number}</p>
                <button onClick={() => setNumber(25)}>Use State Valor</button>
            </div>

        </>
    )
}

export default ManageData
