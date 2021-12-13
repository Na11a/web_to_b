import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { Home, Product } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/:id/" element={<Product />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
