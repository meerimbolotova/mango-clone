import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/products/productsActions";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [descr, setDescr] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const dispatch = useDispatch();
  const handleValue = () => {
    let obj = {
      title,
      price,
      category,
      size,
      descr,
      image1,
      image2,
      image3,
      image4,
    };

    dispatch(addProduct(obj));

    setTitle("");
    setPrice("");
    setCategory("");
    setSize("");
    setDescr("");
    setImage1("");
    setImage2("");
    setImage3("");
    setImage4("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Размеры"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <input
          type="text"
          placeholder="Описание"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фото1"
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фото2"
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фото3"
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фото4"
          value={image4}
          onChange={(e) => setImage4(e.target.value)}
        />
        <button onClick={handleValue}>Добавить продукт</button>
      </div>
    </div>
  );
};

export default AdminPanel;
