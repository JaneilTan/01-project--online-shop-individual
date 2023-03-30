

const sortProducts = (products, sortBy) => {

   return [...products].sort((productA, productB) => {
      const aPrice = productA.prices[0].unit_amount;
      const bPrice = productB.prices[0].unit_amount;
    
      if (sortBy === "low") {
        console.log(sortProducts);
        return aPrice - bPrice;
      }
  
      if (sortBy === "high") {
        return bPrice - aPrice;
      }
      if (sortBy === "latest") {
        return productB.created - productA.created;
      }
    });
  };
  
  export default sortProducts;