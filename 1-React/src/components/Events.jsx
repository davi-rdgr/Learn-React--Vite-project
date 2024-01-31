const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }
    const renderSomething = (x) => {
        if (x) {
            return <h3>Renderizando isso!</h3>
        } else {
            return <h3>Também posso renderizar isso</h3>
        }
    }
    return (

        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
                <button onClick={() => console.log("clicou")}>Clique aqui também</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    )
}

export default Events;