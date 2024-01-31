const TemplateExpressions = () => {

    const name = "Davi Rodeghiero"
    const data = {
        name: 'Davi',
        profissão: 'Programador'
    }


    return (
        <div>
            <h1>Olá {name}, tudo bem? </h1>
            <h1>Você atua como: {data.profissão}</h1>
        </div>
    )

}

export default TemplateExpressions;