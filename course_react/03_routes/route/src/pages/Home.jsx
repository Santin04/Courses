import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
    const url = "http://localhost:3000/products";

    const { data: items, loading } = useFetch(url);

    return (
        <div>
            <h1>Produtos</h1>
            {loading && <p>Carregando...</p>}
            {items &&
                items.map((item) => (
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

export default Home;
