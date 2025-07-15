import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    // função que vai fazer a pesquisa
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${query}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                // deixando sempre o valor de query igual ao valor de dentro do input
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
            />
            <input type="submit" value="Buscar" />
        </form>
    );
};

export default SearchForm;
