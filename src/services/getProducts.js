const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = await fetch("https://stars-uaj-staging.begin.app");

  const products = await url.json();
  console.log(products);
  return products;
};

export { getProducts };
