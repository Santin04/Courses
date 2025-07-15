const ShowUsers = ({ name, age, country }) => {

    return (
        <>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <p>Country: {country}</p>
            {age >= 18 ? 
                (<p>Usuário pode tirar habilitação de motorista</p>) : 
                (<p>Usuário não pode tirar habilitação de motorista</p>)}
            <hr />
        </>
    );
};

export default ShowUsers;