import { ProductComponent } from './../../component/product/product.component';
import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly _HttpClient : HttpClient){}

  myHeaders:any = {Token : localStorage.getItem("usertoken") }

checkout(cartId:string | null ,shippingAddress:string|null):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}?url=${environment.serverUrl}`,
{
  "shippingAddress":shippingAddress
},


  )
}



}
