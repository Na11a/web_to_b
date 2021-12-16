import { React, useState } from "react";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../store/cardReducer";
import Size from "./Size";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product, onDelete, onBuy }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.card.order);
  const [disabledBuy, setDisabledBuy] = useState(false);
  const onBuyClick = (product) => {
    dispatch(addProduct(product));
  };
  const onDeleteClick = (product) => {
    dispatch(deleteProduct(product));
  };

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
        <Size size={product.size} />
        {onBuy && (
          <Button
            disabled={products.find((item) => item === product)}
            onClick={() => onBuyClick(product)}
          >
            Buy
          </Button>
        )}
        {onDelete && (
          <Button onClick={() => onDeleteClick(product)}>Delete</Button>
        )}
        <Link to={`/${product.id}/`}>
          <Button
            style={{ background: "blue", color: "white", borderRadius: "10px" }}
          >
            View More
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProductCard;
