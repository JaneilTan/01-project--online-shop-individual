import { React, useEffect, useState } from "react";
import "./App.css";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
// import Product from "..src/components/Product";
import Product from "./components/Product";


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
      <div className="toolbar">
       {/* FilteBy */}
       {/* SortBy */}
      </div>
      <Product products={products} />
    
    </div>
    
  );
};

export default App;
