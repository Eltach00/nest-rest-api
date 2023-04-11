import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  create(product: CreateProductDTO) {
    this.products.push({ ...product, id: Date.now().toString() });
    return this.products;
  }

  getById(id: string) {
    return this.products.find((item) => item.id === id);
  }

  delete(id: string) {
    return this.products.filter((item) => item.id !== id);
  }
}
