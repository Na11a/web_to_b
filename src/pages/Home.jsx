import { React, useEffect, useState } from "react";
import { getProducts } from "../features";
import ProductCard from "../components/ProductCard";
import ModalProduct from "../components/ModalProduct"
import {List,Button} from 'antd'

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const showModalForm = () => {
    setShowModal(true);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products && (
        <List
        bordered
          grid={{
            gutter: 18,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 8,
            xl: 6,
            xxl: 6,
          }}
          dataSource={products}
          renderItem={(product) => (
            <List.Item>
              <ProductCard product={product}>Card content</ProductCard>
            </List.Item>
          )}
        />
      )}
      <Button onClick={()=>showModalForm()}>Add new Pizza </Button>
      {showModal && <ModalProduct closeModel={setShowModal}/>}
    </div>
  );
};

export default Home;
