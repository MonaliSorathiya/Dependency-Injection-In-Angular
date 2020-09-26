import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  //HTTP calls here
  getProducts(){
    const productList = [
      { productId: 1, productName: 'Laptop' },
      { productId: 2, productName: 'Mobile' },
      { productId: 3, productName: 'TV' },
      { productId: 4, productName: 'Headphone' },
    ];
    return productList;
  }
}
