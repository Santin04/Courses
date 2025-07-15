import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    //loading
    const [loading, setLoading] = useState(false);

    //configurando o envio de dados
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    };

    //puxando dado da API
    useEffect(() => {
        //loading
        setLoading(true)

        const fetchData = async () => {
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
        };

        fetchData();
        setLoading(true)
    }, [url, callFetch]);

    //enviando dados para a API assim que a config for enviada
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        };
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading };
};
