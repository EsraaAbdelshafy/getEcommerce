import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthnService {

 private readonly _HttpClient = inject(HttpClient)
 private readonly _Router=inject(Router)

 userData:any = null

 setRegisterForm(data:object):Observable<any>
 {
return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup",data)
 }


 saveUserdata():void{
  if( localStorage.getItem ('usertoken')!== null){

this.userData = jwtDecode (localStorage.getItem("usertoken")!)
console.log("userdata",this.userData)
  }
 

 }



 
 setLoginform(data:object):Observable<any>{
  return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin",data)
 }


 logout(){
  localStorage.removeItem('usertoken');
this._Router.navigate(['/login'])
 }


 setVarifyEmail(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data
  )
 

 }
 setvarifaycode(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, data
   
  )

 }

 setresetPassword(data:object):Observable<any>{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`, data
    
  )

 

}}
