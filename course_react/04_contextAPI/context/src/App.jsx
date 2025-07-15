import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* home: aonde está sendo usado o context */}
                    <Route path="/" element={<Home />} />
                    {/* about: aonde está sendo usado o context com hooks */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// no hooks o arquivo usa um context, e dessa forma você coloca o context em um
// arquivo e só importa esse arquivo e suas funcionalidades, em vez de ter que
// importar toda vez o context e criar as funcionalidades

export default App;
