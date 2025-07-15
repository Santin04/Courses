import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    //pegando o id do produto
    const { id } = useParams();

    //carregamento de um dado somente
    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading } = useFetch(url);

    return (
        <>
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}/info`}>
                        Mais informações...
                    </Link>
                </div>
            )}
        </>
    );
};

export default Product;
