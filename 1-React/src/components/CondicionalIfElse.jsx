import React, { useState } from 'react'

const CondicionalIfElse = () => {
    const [X] = useState(true)
    // o name é o valor da variável, o setName é a função que transformará ela em outra coisa.
    const [name, setName] = useState("Matue")
    return (
        <div>

            <h1>isso será exibido?</h1>
            {X && <p>Se X for true, sim</p>}
            {name === "Joao" ? (
                <div>
                    <p>O nome é Joao</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
            {/* Criando uma função inline que transforma o nome em Joao caso ele seja outro */}
            <button onClick={() => setName("Joao")}>Clica aqui</button>
        </div>
    )
}

export default CondicionalIfElse
