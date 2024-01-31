import React from 'react'
// usando children eu consigo adicionar elementos html pelo App abrindo e fechando a tag do component.
const Container = ({ children }) => {
    return (
        <div>
            <h2>este é o título do container</h2>
            {children}
        </div>
    )
}

export default Container
