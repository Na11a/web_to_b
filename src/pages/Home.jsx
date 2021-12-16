import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchPizzas } from "../store/asyncActions/pizzas";
import ModalProduct from "../components/ModalProduct";
import { List, Button } from "antd";
import { Link } from "react-router-dom";
import { Spin } from "antd";

const Home = ({ pizzas }) => {
  const initPizzas = 2;
  const loadPizzas = 3;
  const dispatch = useDispatch();
  const [spinning, setSpinning] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setSpinning(true);
    const timer = setTimeout(() => {
      setProducts(pizzas.slice(0, products.length + loadPizzas));
      setSpinning(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [loading]);

  const clickLoadMore = () => {
    setLoading(!loading);
  };
  const showModalForm = () => {
    setShowModal(true);
  };

  return (
    <div>
      {products && (
        <List
          bordered
          grid={{
            gutter: 18,
            column: loadPizzas,
          }}
          dataSource={products}
          renderItem={(product) => (
            <Link to={`${product.id}`}>
              <List.Item>
                <ProductCard product={product}>Card content</ProductCard>
              </List.Item>
            </Link>
          )}
        />
      )}
      <Spin spinning={spinning} />
      <Button onClick={clickLoadMore}>Load More</Button>
      <Button onClick={() => showModalForm()}>Add new Pizza </Button>
      {showModal && <ModalProduct closeModel={setShowModal} />}
    </div>
  );
};

export default Home;
