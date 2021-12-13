import { React, } from "react";
import { Card, Button } from "antd";
import Size from "./Size";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt={`${product.name}`}
            height="200px"
            src={`${product.image_url}`}
          />
        }
      >
        <Meta title={product.name} description={`${product.price}$`} />
        <Button
          style={{ marginTop: 20 }}
          type="primary"
        >
          Show Info
        </Button>
        <Size size={product.size} />
      </Card>
    </div>
  );
};

export default ProductCard;
