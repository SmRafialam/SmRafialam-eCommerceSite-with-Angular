import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(`${environment.apiUrl}/GetAllProducts`)
  }

  saveProduct(obj:any){
    return this.http.post(`${environment.apiUrl}/CreateProduct`,obj)
  }

  updateProduct(obj:any){
    return this.http.post(`${environment.apiUrl}/UpdateProduct`,obj)
  }

  deleteProduct(id: any){
    return this.http.get(`${environment.apiUrl}/UpdateProduct`,id)
  }
}
