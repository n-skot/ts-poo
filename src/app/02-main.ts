import { ProductMemoryService } from "./services/product.service";

const productService = new ProductMemoryService();

  productService.create({
  title: "Product 1",
  description: "Description 1",
  price: 10,
  images: ["image1.jpg", "image2.jpg"],
  categoryId: 1,
})

const products = productService.products;

console.log(products);

productService.update(products[0].id, {
  title: "Product 1 Updated",
});

const search = productService.findOne(products[0].id);
console.log(search);
