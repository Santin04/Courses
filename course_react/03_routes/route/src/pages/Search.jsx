import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const url = `http://localhost:3000/products?q=${query}`;
    const { data: items, loading } = useFetch(url);

    const filteredItems = items
        ? items.filter((item) =>
              item.name.toLowerCase().includes(query.toLowerCase())
          )
        : [];

    return (
        <div>
            <h1>Resultados:</h1>
            {loading && <p>Carregando...</p>}
            {filteredItems &&
                filteredItems.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R${item.price}</p>
                        {/* Rota dinâmica */}
                        <Link to={`/product/${item.id}`}>Detalhes...</Link>
                    </div>
                ))}
        </div>
    );
};

export default Search;
