import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColor = () => {
    const context = useContext(TitleColorContext);

    if (!context) {
        console.log("Context não encontrado");
    }

    return context;
};
