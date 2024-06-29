import { Category } from '../model/category.model';
import { Products } from '../model/product.mpdel';

export interface CreateProductDto extends Omit<Products, 'id' | 'creationAt' | 'updatedAt' | 'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
