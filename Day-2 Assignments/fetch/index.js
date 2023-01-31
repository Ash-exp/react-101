async function checkStatus(status) {
  switch (status) {
    case 200:
      return Promise.resolve(true);
    case 404:
      return Promise.reject(`STATUS ${status} Page not found`);
    default:
      return Promise.reject(`STATUS ${status} Server error`);
  }
}
async function fetchProduct() {
  try {
    const URL = 'https://fakestoreapi.com/products/2';
    let product = await fetch(URL);
    await checkStatus(product.status);
    product = await product.json();
    console.log(product);
  } catch (err) {
    console.error(err);
  }
}

fetchProduct();
