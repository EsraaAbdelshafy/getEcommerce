import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private readonly _HttpClient:HttpClient) { }



  addProductwishList(data:string):Observable<any>{

    return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`,


      data
    )
  }




}
