import { getAllProducts as getAllProductsService } from './productsService';

export async function getAllProducts() {
  const products = await getAllProductsService();
  return products;
}
