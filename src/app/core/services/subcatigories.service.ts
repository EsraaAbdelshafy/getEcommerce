import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcatigoriesService {

  constructor(private readonly _HttpClient:HttpClient) { }

getSubCatigoris():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/subcategories`)
}

getSpecificSubCatigoris(id:string |null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/subcategories/${id}`)
}


getAllSubCatigoris(id:string):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}/subcategories`)
}

}
