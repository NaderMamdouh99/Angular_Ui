import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
baseUrl:string = 'http://localhost:3005/customers';

  constructor(private http:HttpClient) { }
  getall():Observable<Icustomer[]>{
    return this.http.get<Icustomer[]>(this.baseUrl);
  }

  getById(id:number):Observable<Icustomer>{
    return this.http.get<Icustomer>(`${this.baseUrl}/${id}`);
  }

  add(customer:Icustomer){
    return this.http.post(this.baseUrl,customer);
  }

  edit(id:number,customer:Icustomer){
    return this.http.put(`${this.baseUrl}/${id}`,customer);
  }

  delete(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
