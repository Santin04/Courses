const Render = () => {

    //criando um função que vai ser excutada assim quando rendereizar
    //isso vai acontecer pq vamos passar a função e em seguida ()
    const renderElement = (x) => {
        if(x) {
            return <h1>X é verdadeiro</h1>
        } else {
            return <h1>X é falso</h1>
        };
    }; 

    return (
        <div>
            {renderElement(true)}
            {renderElement(false)}
        </div>
    );
};

export default Render;