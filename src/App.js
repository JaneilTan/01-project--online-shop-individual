import { React, useEffect, useState } from "react";
import "./App.css";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";


const Product = ({ name, description, src, price }) => {
  return (
      <li className="product-grid-item">
          <img src={src} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>

          <p>{price}</p>
          <button>Buy now</button>
      </li>
  );
};



function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Online Shop</h1>
      <Product />
    
    </div>
    
  );
};

export default App;
