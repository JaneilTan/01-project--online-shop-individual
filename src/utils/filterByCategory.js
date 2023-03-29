const filterByCategory = (products, filterBy) => {
    if (filterBy === "all") {
      return products;
    }
  const result = [...products.filter((product) => product.metadata.category ===filterBy)];
  
  return result;
};

export default filterByCategory;