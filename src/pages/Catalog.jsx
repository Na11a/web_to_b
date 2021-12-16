import { React, useState } from "react";
import { DropDownSort } from "../components";
import ProductCard from "../components/ProductCard";
import { List, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzasByFilter } from "../store/asyncActions/pizzas";
import { AutoComplete } from "antd";
import { searchPizzas, filterByPrice } from "../store/pizzaReducer";

const Catalog = () => {
  function hasNumber(myString) {
    return /\s/.test(myString);
  }
  let products = useSelector((state) => state.pizzas.catalogPizzas);
  let allProducts = useSelector((state) => state.pizzas.pizzas);
  const [filterValue, setFilterValue] = useState("");
  const dispatch = useDispatch();
  const findPizzasByName = (input) => {
    dispatch(searchPizzas({ pizzas: allProducts, input: input }));
  };
  const findPizzasByMinPrice = (input) => {
    setFilterValue(input);
    if (input === "") {
      return;
    }
    if (isNaN(parseInt(input.slice(-1)))) {
      alert(`${input} is not a number`);
      setFilterValue(input.slice(0, input.length - 1));

      return;
    }
    dispatch(fetchPizzasByFilter(input));
  };
  return (
    <div>
      <DropDownSort products={products} />
      <AutoComplete onSearch={findPizzasByName} style={{ width: 200 }} />
      <AutoComplete
        value={filterValue}
        onSearch={findPizzasByMinPrice}
        placeholder="PriceBiggerThan"
        style={{ width: 200, display: "block" }}
      />
      {products && (
        <List
          bordered
          grid={{
            gutter: 18,
            column: 4,
          }}
          dataSource={products}
          renderItem={(product) => (
            <List.Item>
              <ProductCard product={product} onBuy>
                Card content
              </ProductCard>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Catalog;
