import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly _HttpClient :HttpClient) { }

 myHeaders:any = {Token : localStorage.getItem("usertoken") }

 cartNumber:BehaviorSubject<number> =new BehaviorSubject (0);

  addProductToCart(id:string):Observable<any>
  {
   return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,
    {
      "productId":id
   },
   {
   
   }
   )
  }

 getProductsCart():Observable<any>
 {
 return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`,{
  headers:this.myHeaders
 })
 }

deletSpecificCartItem(id:string):Observable<any>
{
  return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`,
    {
  headers:this.myHeaders
 })
}


updateProductToCart(id:string , newcount:number):Observable<any>
{
 return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
  {
     "count": newcount
 },
 {
  headers: this.myHeaders 
 }
 )
}

clearCart():Observable<any>
{
 return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,

  {
    headers:this.myHeaders
  }
)
}
   }
