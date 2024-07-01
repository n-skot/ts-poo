import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";

import { AccesType, Category } from "../model/category.model";

export interface ICreateCategoryDto extends Omit<Category, "id" | "creationAt" | "updatedAt"> {}

export class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 40)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccesType)
  accesType?: AccesType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'sdcsd a';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
