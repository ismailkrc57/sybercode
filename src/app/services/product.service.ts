import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";
import {ProductImage} from "../models/productImage";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(environment.apiUrl+'/Product/getall');
  }
  getById(id:string):Observable<Product>{
    return this.http.get<Product>(environment.apiUrl+'/Product/getbyid?id='+id);
  }
  add(product:Product):Observable<Product>{
    return this.http.post<Product>(environment.apiUrl+'/Product/add',product);
  }
  addImage(productId:number,image:File):Observable<ProductImage>{
    const formData = new FormData();
    formData.append('image',image);
    return this.http.post<ProductImage>(environment.apiUrl+'/ProductImage/add?productId='+productId,formData);
  }
  getAllImages():Observable<ProductImage[]>{
    return this.http.get<ProductImage[]>(environment.apiUrl+'/ProductImage/getall');
  }
}
