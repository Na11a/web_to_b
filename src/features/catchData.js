import axios from "axios";

const getProducts = () => {
  return axios
    .get("http://localhost:8000/products/")
    .then((response) => response.data.products);
};
const AddPizza = (pizza) => {
  return axios.post("http://localhost:8000/products/", pizza);
};
const getProduct = (id) =>{
  return axios
  .get(`http://localhost:8000/product/${id}/`)
  .then(response => response.data)
}
export { AddPizza, getProducts,getProduct };
