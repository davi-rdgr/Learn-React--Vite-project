import MyComponents from "./MyComponents";

// criando o componente com arrow function
const FirstComponent = () => {
    // retornando o que será o conteúdo do componente
    return(
        <div>
            <h1>Meu primeiro componente !</h1>
            <MyComponents />
        </div>
    )

}
// exportando o componente
export default FirstComponent;