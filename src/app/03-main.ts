import { HttpProductsService } from "./services/product.http.sercice";

(async () => {
  try {
    const productService = HttpProductsService.getIntance();

    console.log('---'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('---'.repeat(10));
    const productId = products[0].id;
    await productService.update(productId, {
      title: 'Product 1 Updated',
      price: 15000,
      description: 'Updated Description',
    })

    console.log('---'.repeat(10));
    const product = await productService.findOne(productId)
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();
