import { UpdateProductDto } from "../dto/product.dto";
import { Products } from "../model/product.mpdel";
import { ProductHttp2Service } from "./product.http2.service";

export class ProductCrudService {
  private _url = 'https://api.escuelajs.co/api/v1/products';
  private _http = new ProductHttp2Service(this._url);

  public update(id: Products['id'], dto: UpdateProductDto) {
    this._http.reques()
    return this._http.update(id, dto);
  }
}


const htto = new ProductCrudService();

htto.update(77    , { title: 'Product   '}).then(rta => console.log(rta));
