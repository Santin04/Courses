import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    return (
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
            {/* Maneira correta de fazer o navbar */}
            <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "noClass")}
            >
                Home
            </NavLink>
            <NavLink to={"/about"}>About</NavLink>
            {/* Já manda a classe .active para o item selecionado */}
            {/* E também como alterar as classes da forma que está o primeiro */}
        </nav>
    );
};

export default Navbar;
