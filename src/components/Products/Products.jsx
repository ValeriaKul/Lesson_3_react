import React from "react";
import s from "./style.module.css";

export default function Products({
  id,
  title,
  price,
  deleteProduct,
  changePrice,
}) {
  return (
    <div className={s.card}>
      <p className={[price === 0 ? s.free : s.title]}>{title}</p>
      <p>$ {price || "Free"}</p>
      <button className={s.btnDelete} onClick={() => deleteProduct(id)}>
        Delete
      </button>
      <button className={s.btnAdd} onClick={() => changePrice(id, 10)}>
        +10
      </button>
      {price !== 0 ? (
        <button onClick={() => changePrice(id, -10)}>-10</button>
      ) : (
        ""
      )}
    </div>
  );
}
