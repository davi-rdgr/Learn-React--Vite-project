//// duas formas de passar props por parâmetro
// const name = "Davi"
// const [username] = useState("Laís")
// <ShowUserName name={username} />





import React from 'react'

const ShowUserName = (props) => {
    return (
        <div>

            <h2>O nome do usuário é: {props.name}</h2>

        </div>
    )
}

export default ShowUserName
