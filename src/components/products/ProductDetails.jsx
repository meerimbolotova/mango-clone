import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../store/products/productsActions";
import "./productsStyle/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  const { productDetails } = useSelector((state) => state.products);
  return (
    <div className="details">
      <div className="details-image-block">
        <img className="details-image" src={productDetails.image1} alt="" />
        <img className="details-image" src={productDetails.image2} alt="" />
        <img className="details-image" src={productDetails.image3} alt="" />
        <img className="details-image" src={productDetails.image4} alt="" />
      </div>
      <div className="details-descr-block">
        <span style={{ color: "gray", fontSize: "0.8rem" }}>NEW NOW</span>
        <br />
        <br />
        <div className="title-price-block">
          <p className="title-price">{productDetails.title}</p>
          <p className="title-price">KGS {productDetails.price},00</p>
        </div>
        <br />
        <br />
        <br />
        <div className="size-block">
          <p
            style={{
              fontSize: "1.5rem",
              color: "darkgrey",
              textDecoration: "underline",
            }}
          >
            Таблица размеров
          </p>
          <p style={{ fontSize: "1.8rem" }}>{productDetails.size}</p>
        </div>
        <br />
        <br />
        <div className="description">
          <p
            style={{
              fontSize: "1.5rem",
              color: "darkgrey",
              textDecoration: "underline",
            }}
          >
            Описание
          </p>
          <br />
          <span>{productDetails.descr}</span>
        </div>
        <br />
        <div className="wishlist-btn">Добавить в избранные</div>
      </div>
    </div>
  );
};

export default ProductDetails;
