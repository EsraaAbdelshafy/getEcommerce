import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService  {

  constructor(private readonly _HttpClient:HttpClient) { }



getBrands():Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands`)
}
getSpecificBrands(id:string |null):Observable<any>{
  return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands/${id}`)
}

}
