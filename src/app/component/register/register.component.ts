import { subscribe } from 'node:diagnostics_channel';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthnService } from '../../core/services/authn.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  msgErorr:string=""
  msgSacces:string=""
 
  private readonly _AuthnService=inject(AuthnService)
  private readonly _FormBuilder=inject(FormBuilder)
  private readonly _Router=inject(Router)

 

// registerForm:FormGroup =new FormGroup(
//   {
//     name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
//     email:new FormControl(null,[Validators.required,Validators.email]),
//     phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
//     password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
//     rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
//   },this.confirmRepassword)


registerForm:FormGroup = this._FormBuilder.group({
  name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  email:[null,[Validators.required,Validators.email]],
  phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  password:[null,[Validators.required,Validators.pattern(/^\w{5,6}$/)]],
  rePassword:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]]


},this.confirmRepassword)



isloading:boolean=false;


registersub!:Subscription;


registerSubmit():void
{
  if(this.registerForm.valid)
    {
      this.isloading=true
     this.registersub = this._AuthnService.setRegisterForm(this.registerForm.value).subscribe(
      {
        next:(res:any)=>{console.log(res)
          
          if(res.message =='success' ){
            this.msgSacces =res.message
            setTimeout(() => {
              this._Router.navigate(['/login'])
            }, 1000);
           
            this.isloading=false }
         


        },
        error:(err:HttpErrorResponse)=>{console.log(err)
          this.msgErorr = err.error.message
          if(err.error.message == 'Account Already Exists'
           ){
            this._Router.navigate(['/login'])
           }

          this.isloading=false
          
        }
      }
    )
  }
}



ngOnDestroy(): void {

  this.registersub?.unsubscribe()
}







  confirmRepassword(g: AbstractControl){
    if(g.get('password')?.value == g.get('rePassword')?.value) {
      return null
    }
    else{
      return {mismatch:true}
    }
  }



}
