import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Products } from "./product.mpdel";

export interface ProductService {
  getAll(): Products[] | Promise<Products[]>;
  update(id: Products['id'], changes: UpdateProductDto): Products | Promise<Products>;
  create(data: CreateProductDto): Products | Promise<Products>;
  findOne(id: Products['id']): Products | undefined | Promise<Products | undefined>;
}
