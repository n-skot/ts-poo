import axios from "axios";

import { UpdateProductDto, CreateProductDto } from "../dto/product.dto";
import { ProductService } from "../model/product-service.model";
import { Products } from "../model/product.mpdel";

export class HttpProductsService implements ProductService{

  private static instance: HttpProductsService | null = null;
  private _url: string = 'https://api.escuelajs.co/api/v1/products';

  private constructor() {}

  async getAll() {
    const { data } = await axios.get<Products[]>(this._url);
    //throw new Error("Method not implemented.");
    return data;
  }

  async update(id: Products['id'], changes: UpdateProductDto) {
    const { data } = await axios.put(`${this._url}/${id}`, changes);
    //throw new Error("Method not implemented.");
    return data;
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this._url, dto);
    //throw new Error("Method not implemented.");
    return data;
  }

  async findOne(id: Products['id']) {
    const { data } = await axios.get(`${this._url}/${id}`);
    //throw new Error("Method not implemented.");
    return data;
  }

  public static getIntance() {
    if (!HttpProductsService.instance) {
      HttpProductsService.instance = new HttpProductsService();
    }
    return HttpProductsService.instance;
  }
}
