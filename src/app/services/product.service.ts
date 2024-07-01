import { faker } from '@faker-js/faker';

import { Products } from '../model/product.mpdel';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductService } from '../model/product-service.model';

export class ProductMemoryService implements ProductService {
  private _product: Products[] = [];

  public create(data: CreateProductDto): Products {
    const product = {
      ...data,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      }
    }

    return this.add(product);
  }

  getAll() {
    return this._product;
  }

  private add(product: Products): Products {
    this._product.push(product);
    return product;
  }

  public update (id: Products['id'], changes: UpdateProductDto ): Products {
    const index = this._product.findIndex(item => item.id === id);
    const prevData = this._product[index];
    this._product[index] = {
      ...prevData,
      ...changes
    }
    return this._product[index];
  }

  public findOne(id: Products['id']): Products | undefined {
    return this._product.find(item => item.id === id);
  }

  public get products(): Products[] {
    return this._product;
  }
}

