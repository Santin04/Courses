const Props02 = ({ brand, km, color }) => {

    //uma forma alternativa de usar as props sem ter que ficar puxando os
    //valores com props.name
    return (
        <div>
            <p>Brand: {brand}</p>
            <p>Km: {km}</p>
            <p>Color: {color}</p>
            <hr />
        </div>
    );

};

export default Props02;