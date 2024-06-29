import axios from "axios";
import { Products } from "./model/product.mpdel";

(async () => {

  // Esta funcion la tipamos devolviendo una promesa con untipado Product aunque solo se puede ver desde fuera y desde dentro sigue como any
  /*async function getProduct(): Promise<Products[]> {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
    return data;
  }*/

  // Esta funcion se fuerza el tipado para poner el data any a data2 con un tipado de tipo Products
  /*async function getProduct(): Promise<Products[]> {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data2 = data as Products[];
    return data;
  }*/

  // Esta es la forma correcta de tipar la respuesta del axios.get para que sea de tipo Products[], tendremos el tipado desde dentro como fuera de la funcion
  async function getProduct(): Promise<Products[]> {
    const { data } = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  console.log('---'.repeat(10));
  const productos = await getProduct();
  console.log(productos.map(item => `${item.id} - ${item.title}`));

})();
