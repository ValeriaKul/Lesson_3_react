import { useState, useEffect } from "react";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";
import s from "./style.module.css";

function App() {
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      const newArray = data.map(({ id, title, price }) => ({
        id,
        title,
        price,
      }));
      setProducts(newArray);
    })();
  }, []);

  const [products, setProducts] = useState([]);

  const deleteProduct = async (delId) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${delId}`, {
      method: "DELETE",
    });
    const { id } = await resp.json();
    setProducts(products.filter((product) => product.id !== id));
  };

  const createProduct = async (title, price) => {
    price = +price.toFixed(2);
    const resp = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({ title, price }),
    });
    const { id } = await resp.json();
    setProducts([...products, { id, title, price }]);
  };

  const changePrice = (changeId, value) => {
    const target = products.find(({ id }) => id === changeId);
    if (+target.price + value < 0) {
      target.price = 0;
    } else {
      target.price += value;
    }
    target.price = +target.price.toFixed(2);
    setProducts([...products]);
  };

  return (
    <div>
      <AddProduct createProduct={createProduct} />
      <div className={s.total}>
        {products.map((product) => (
          <Products
            key={product.id}
            {...product}
            deleteProduct={deleteProduct}
            changePrice={changePrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
