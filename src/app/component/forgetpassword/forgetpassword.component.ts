import { Token } from '@angular/compiler';
import { AuthnService } from './../../core/services/authn.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {

  step :number =1;

  private readonly _AuthnService=inject(AuthnService)
  private readonly _Router=inject(Router)



verifayEmail : FormGroup =new FormGroup({
  email : new FormControl (null ,[Validators.required,Validators.email])
})

verifayCode : FormGroup =new FormGroup({
  resetCode : new FormControl (null ,[Validators.required,Validators.pattern(/^\w{6}$/)])
})

resetPassword : FormGroup =new FormGroup({
  email : new FormControl (null ,[Validators.required,Validators.email]),
  newPassword : new FormControl (null ,[Validators.required,Validators.pattern(/^\w{6,}$/)])
})

varifayEmailSubmit():void{
  this._AuthnService.setVarifyEmail(this.verifayEmail.value).subscribe(
  {next:(res:any)=>{console.log(res)
   if(res.statusMsg == "success"){
     this.step=2
   }
   let emailvalue = this.verifayEmail?.get('email')?.value
 
   this.resetPassword.get('email')?.patchValue(emailvalue)
  }
 }
 )
 
 
 
 
 
 }

 varifayCodeSubmit():void{
  this._AuthnService.setvarifaycode(this.verifayCode.value).subscribe(
    {next:(res:any)=>{console.log(res)
      if(res.status == "Success"){
        this.step=3
      }
    }
  }
  )
}
resetPasswordSubmit():void{
  this._AuthnService.setresetPassword(this.resetPassword.value).subscribe(
    {
      next:(res:any)=>{console.log(res)
        
          localStorage.setItem('usertoken' , res.token   )
          this._AuthnService.saveUserdata()

          this._Router.navigate(['/home'])

        
        

      }
    }
  )
}







}
