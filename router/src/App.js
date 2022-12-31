import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Gallery from "./components/gallery";
import About from "./components/about";
import Vip from "./components/vip";

function App() {
  return (
    <BrowserRouter>
      <header className="boder p-2 container">
        <Link to="/" className="me-2">
          home
        </Link>
        <Link to="/about" className="me-2">
          about
        </Link>
        <Link to="/gallery" className="me-2">
          gallery
        </Link>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vip/:id" element={<Vip />} />
        <Route
          path="/*"
          element={
            <div>
              <h2>Page not fount, 404!</h2>
            </div>
          }
        />
      </Routes>
      <footer>
        <h3>footer</h3>
      </footer>
    </BrowserRouter>
  );
}
export default App;
