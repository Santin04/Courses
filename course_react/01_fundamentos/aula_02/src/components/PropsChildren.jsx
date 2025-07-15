const PropsChildren = ({ children, valor }) => {


    return (
        <>
            <h1>Elemento de dentro do componente</h1>
            {children}
            <p>valor: {valor}</p>
        </>
    )

}

export default PropsChildren;