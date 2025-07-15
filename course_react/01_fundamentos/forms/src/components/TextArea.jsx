import { useState } from "react";

const TextArea = () => {
    const [des, setDes] = useState("");

    const handleDes = (e) => {
        setDes(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(des);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea
                        name="bio"
                        placeholder="Descrição"
                        onChange={handleDes}
                        value={des}
                    ></textarea>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
};

export default TextArea;
