import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
    return (
        <div className="App">
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                {/* Input de pesquisa */}
                <SearchForm />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* Rota dinâmica */}
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/product/:id/info" element={<Info />} />
                    {/* Pesquisa */}
                    <Route path="/search" element={<Search />} />
                    {/* Redirecionando */}
                    <Route
                        path="/company"
                        element={<Navigate to={"/about"} />}
                    />
                    {/* última rota = rota para 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
