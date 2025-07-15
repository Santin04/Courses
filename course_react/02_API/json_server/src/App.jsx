//resumindo tudo que foi feito:
// - foi feito o resgate de dados de uma API, foi mostrado também como enviar um
//   dado para a API, tudo isso no arquivo App.jsx, depois disso foi mostrado
//   como organizar melhor o código, passando o resgate de dados para um arquivo
//   separado e só chamamos uma função que já traz os dados da API, também foi
//   mostrado como organizar melhor a parte de enviar dados para a API

import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
    //comentando porque com o hooks, começamos a usar o useState que está dentro
    //dele
    // const [product, setProduct] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // // resgatando dados
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch(url);
    //             const data = await res.json();
    //             setProduct(data);
    //         } catch (error) {
    //             console.error("Erro ao buscar os produtos:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    const { data: items, httpConfig, loading } = useFetch(url);

    //adicionando produto
    const handleSubmit = async (e) => {
        e.preventDefault();

        //passando os dados do produto
        const newProduct = {
            name,
            price,
        };

        // //adicionando o produto na API
        // const res = await fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "aplicattion/json",
        //     },
        //     body: JSON.stringify(newProduct),
        // });

        // //carregamento dinâmico dos dados
        // const addedProduct = await res.json();

        // setProduct((prevProduct) => [...prevProduct, addedProduct]);

        httpConfig(newProduct, "POST");

        setName("");
        setPrice("");
    };

    return (
        <div className="App">
            <h1>Lista de produtos</h1>
            {/* loading */}
            {loading && <p>Carregando dados</p>}
            {items &&
                items.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.name} - R$ {item.price}
                        </p>
                    </div>
                ))}
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={name}
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        Preço:
                        <input
                            type="number"
                            value={price}
                            name="price"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </label>
                    {loading && <input type="submit" disabled value="Aguarde" />}
                    {!loading && <input type="submit" value="Criar" />}
                </form>
            </div>
        </div>
    );
}

export default App;
