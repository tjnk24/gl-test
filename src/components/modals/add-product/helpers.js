export const setImageThumb = (file, callback) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    callback({
      imageThumb: reader.result
    })
  };
  reader.onerror = (error) => {
      console.log('Error: ', error);
  };
}

export const generateProductId = (productsArray) => {
  productsArray.sort((product, nextProduct) => product.id < nextProduct.id ? 1 : -1);
  return productsArray[0].id + 1;
}
