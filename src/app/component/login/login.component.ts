import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';

import { LoginService } from '../../core/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthnService } from '../../core/services/authn.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _AuthnService=inject(AuthnService)
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _Router=inject(Router)


isloading:boolean = false 

loginForm:FormGroup =this._FormBuilder.group({
   
    email:[null],
    password:[null]
  })

  loginSubmit():void
  {
    if(this.loginForm.valid){

      this.isloading=true
      this._AuthnService.setLoginform(this.loginForm.value).subscribe(
        {
          next:(res:any)=>{console.log(res)
            
             if(res.message =="success"){
            setTimeout(() => {
              
            localStorage.setItem("usertoken",res.token
              )
            this._AuthnService.saveUserdata()
           
      
      
            this._Router.navigate(['/home'])
      
            }, 1000);
          
            this.isloading=false }
         }
         
        }
      )
        }
    }


}
