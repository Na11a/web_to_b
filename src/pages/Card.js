import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { List } from "antd";

const Card = ({}) => {
  const products = useSelector((state) => state.card.order);
  console.log(products);
  return (
    <div>
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
              <ProductCard product={product} onDelete={true}>
                Card content
              </ProductCard>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Card;
