import { useState } from 'react'
import React from 'react'

const ListRender = () => {

    const [list] = useState(["Davi", "Laís", "Alguém"])
    const [user, setUsers] = useState([
        { id: 1, name: "Davi", age: 23 },
        { id: 2, name: "Laís", age: 25 },
        { id: 3, name: "Alguém", age: 43 },
        { id: 4, name: "Davi", age: 23 },
        { id: 5, name: "Laís", age: 25 },
        { id: 6, name: "Alguém", age: 43 },
    ])

    const deleterandom = () => {
        const randomnnumber = Math.floor(Math.random() * 7)
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomnnumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {user.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleterandom}>Delete random user</button>
        </div>
    )
}

export default ListRender
