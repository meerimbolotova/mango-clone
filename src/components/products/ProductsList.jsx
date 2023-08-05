import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import ProductsCard from "./ProductsCard";
import "./productsStyle/ProductsList.css";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <div className="title-block">
        <span>Женская одежда</span> <input type="text" placeholder="Search" />
      </div>
      <div className="list-block">
        {products?.map((item) => (
          <ProductsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
