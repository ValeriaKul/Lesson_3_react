import { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";


function App() {
  const defaultProducts = [
    {id: 1, title: 'велосипед', price: 450},
    {id: 2, title: 'ролики', price: 250},
    {id: 3, title: 'самокат', price: 150},
    {id: 4, title: 'скейт', price: 130},
    {id: 5, title: 'лыжи', price: 2700},
    {id: 6, title: 'коньки', price: 150},
  ]

  const [products, setProducts] = useState(defaultProducts);

  const deleteProduct = (id) => {
    const newEntry = products.filter((product) => product.id !== id);
    setProducts(newEntry);
  }

  const createProduct = (title, price) => {
    const newEntry = {
      id: Date.now(),
      title,
      price
    }
    const newArr = [...products, newEntry];
    setProducts(newArr);
  }

  // const changePriceMap = (id, value) => {
  //   const newArr = products.map(product => {
  //       if (product.id == id){
  //         product.price += value;
  //       }
  //       return product
  //   })    
  //   setProducts(newArr);
  // }

  const changePrice = (changeId, value) => {
    const target = products.find(({id}) => id === changeId);
    if(target.price + value < 0) {
      target.price = 0;
    } else {
      target.price += value;
    }
    setProducts([...products]);
  }
  
  return (
    <div>
      <AddProduct
        createProduct={createProduct}/>
      <div>
        {
          products.map(product => 
          <Products 
          key={product.id}
          {...product} 
          deleteProduct={deleteProduct}
          changePrice={changePrice}
          />)
        }
      </div>
    </div>
  );
}

export default App;
