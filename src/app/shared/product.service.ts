import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  formData: Product = new Product();
  readonly baseURL = 'https://localhost:44358/api/product';
  list: Product [] = [];

  constructor(private http: HttpClient) { }

  postProduct(){
    return this.http.post(this.baseURL, this.formData);
  }

  putProduct() {
    return this.http.put(this.baseURL, this.formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseURL+'/'+id);
  }

  refreshList() {
    this.getProducts();
  }

  async getProducts() {

    this.list = await lastValueFrom(this.http.get(this.baseURL)) as Product[];
  }
}
