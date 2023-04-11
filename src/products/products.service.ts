import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {
  private products = [];

  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(productDto: CreateProductDTO): Promise<Product> {
    return new this.productModel(productDto).save();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async update(id: string, productDto: UpdateProductDTO) {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
