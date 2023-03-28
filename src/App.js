import { React, useEffect, useState } from "react";
import "./App.css";
// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Products from "./components/Products";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import filterByCategory from "./utils/filterByCategory";
import sortProducts from "./utils/sortProducts";



function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState(getProducts())

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      // setProducts(products);
    
    const filtered = filterByCategory(products,filterBy);
    const sorted = sortProducts(filtered, sortBy);
    setFilteredProducts([...sorted]);
    };

    loadData();
  }, [filterBy, sortBy, products]);

  return (
    <div className="container">
      <h1>Online Shop</h1>
      <div className="toolbar">
       <FilterBy setFilteBy={setFilterBy} />
       <SortBy setSortBy={setSortBy}/>
      </div>
       <Products products={filteredProducts} />
    
    </div>
    
  );
};

export default App;
