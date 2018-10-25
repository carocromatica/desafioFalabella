const getProductJson = () => {

  return new Promise((resolve) => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => { resolve(data) });
  });
};