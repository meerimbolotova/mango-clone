import React from "react";
import "./productsStyle/ProductsCard.css";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card-block" onClick={() => navigate("/details/" + item.id)}>
      <img className="card-image" src={item.image1} alt="" />
      <h4>{item.title}</h4>
      <p>{item.price}$</p>
      <span>{item.size}</span>
    </div>
  );
};

export default ProductsCard;
