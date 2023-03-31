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
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onFilter = (filterBy) => {
    const filtered = filterByCategory(products, filterBy);
    setFilteredProducts(filtered);
  };
  const onSort = (sortBy) => {
    const sorted = sortProducts(products, sortBy);
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
      setFilteredProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Pampurred Cats</h1>
      <div className="toolbar">
        <FilterBy setFilterBy={onFilter} />
        <SortBy setSortBy={onSort} />
      </div>
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
