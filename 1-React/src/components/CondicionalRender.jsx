import React, { useState } from 'react'
// o teste lógico mais simple do React que só verifica se algo é verdadeiro ou falso:
const CondicionalRender = () => {
    const [X] = useState(true)
    return (
        <div>

            <h1>Isso será exibido ?</h1>
            {X && <p>se X for true, sim</p>}
            {!X && <p>agora X é falso</p>}
        </div>
    )
}

export default CondicionalRender
