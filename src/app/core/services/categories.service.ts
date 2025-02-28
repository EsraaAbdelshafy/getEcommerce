import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

private readonly _HttpClient=inject(HttpClient)

getAllcategories():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`)
}
getSpecificcategories(id:string|null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/${id}`)
}

}
