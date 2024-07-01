  import axios from "axios";
  import { Category } from "../model/category.model";
  import { Products } from "../model/product.mpdel";
import { UpdateProductDto } from "../dto/product.dto";

  /*export class BaseHttpService<T> {
    data: T[] = [];

    getAll(): Observable<T[]> {
  }

  const base = new BaseHttpService<string>();
  base.data

  const base2 = new BaseHttpService<number>();
  base2.data
  */

  export class BaseHttpService<T> {
    //data: T[] = [];

    constructor(
      protected _url: string,
    ) {}

    async getAll(): Promise<T[]> {
      const { data } = await axios.get<T[]>(this._url);
      return data;
    }

    async update<ID, update>(id: ID, changes: update) {
      const { data } = await axios.put(`${this._url}/${id}`, changes);
      return data;
    }
  }

  (async () => {
    const baseService = new BaseHttpService<Products>('https://api.escuelajs.co/api/v1/products');
    const rta = await baseService.getAll()
    console.log(rta.length);

    const rta2 = await baseService.update<Products['id'], UpdateProductDto>(1, { title: 'Producto modificado' });
  })();

  const baseServiceCategory = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories');
  baseServiceCategory.getAll().then(rta2 => console.log(rta2.length));

  /*const base = new BaseHttpService<Category>();
  base.getAll()

  const base2 = new BaseHttpService<number>();
  base2.data
  */
