const getProducts = async () => {
  // TODO Fetch products and prices from the Stripe API
  // Use the following URL for your fetch request
  const url = "https://stars-uaj-staging.begin.app/products";
  const products = await fetch(url).then((response) => response.json());

  return products;
};

export { getProducts };
 