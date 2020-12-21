import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';

import {Product} from 'src/app/models/Product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  formData : Product;
  readonly APIUrl ="http://localhost:5000/api/products";

  getProdList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.APIUrl);
  }

  addProduct(prod:Product){
    return this.http.post(this.APIUrl,prod);
  }

  private _listeners = new Subject<any>();
  listen():Observable<any>{
    return this._listeners.asObservable();
  }
  filter(filterBy : string){
    this._listeners.next(filterBy);
  }
  deleteProduct(id:number){
    return this.http.delete(this.APIUrl+'/'+id);
  }
  updateProduct(prod:Product,id:number){
    return this.http.put(this.APIUrl+'/'+id,prod);
  }


}
 
