import { React, useEffect, useState } from "react";
import "./App.css";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Products from "./components/Products";
import FilterBy from "./components/FilterBy"



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
       <FilterBy />
       {/* SortBy */}
      </div>
      <Products products={products} />
    
    </div>
    
  );
};

export default App;
