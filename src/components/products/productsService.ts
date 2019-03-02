import db from '../../config/connection';

export function getAllProducts() {
  return db('products');
}
