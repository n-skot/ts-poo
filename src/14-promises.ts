import axios from "axios";

(async () => {
  function delay(time: number) {
    const promises = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promises;
  }

  function getProduct() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductASync() {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products');
    return res;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  console.log('---'.repeat(10));
  const productos = await getProduct();
  console.log(productos.data);

  console.log('---'.repeat(10));
  const productosB = await getProductASync();
  console.log(productosB);

})();
