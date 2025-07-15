import { createContext, useState } from 'react';

// contexto criado
export const CounterContext = createContext();

// o children indica que ele aceita outros elementos dentro da tag dele,
// todos elementos filho vão estar conectado ao provedor (Context) 
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )

};

// export default CounterContext;