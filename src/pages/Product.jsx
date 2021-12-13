import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../features";
import { ProductInfo, ProductComments } from "../components";

const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProduct(id).then((product) => setProduct(product));
  }, []);
  console.log(product);
  return (
    <div>
      {product && (
        <div>
          <ProductInfo product={product} />
          <ProductComments comments={product.comments} />
        </div>
      )}
    </div>
  );
};

export default Product;
