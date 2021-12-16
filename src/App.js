import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Product, Catalog,Card } from "./pages";
import { fetchPizzas } from "./store/asyncActions/pizzas";
import { React, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Header } from "./components";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);
  const products = useSelector(state=>state.pizzas.pizzas)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home pizzas={products}/>} exact></Route>
          <Route path="/:id/" element={<Product />} exact></Route>
          <Route path="/catalog/" element={<Catalog />} exact></Route>
          <Route path="/card/" element={<Card />} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
