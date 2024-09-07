import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  private readonly _CartService=inject(CartService)
  private readonly _ToastrService=inject(ToastrService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)



  cartDetails:Icart ={} as Icart

ngOnInit(): void {
  this._NgxSpinnerService.show('loading-1')
    this._CartService.getProductsCart().subscribe(
      {
        next:(res:any)=>{console.log(res.data)
          this.cartDetails =res.data
          this._NgxSpinnerService.hide('loading-1')
        },
        error:(err)=>{console.log(err)}
      }
    )
}

removeItem(id:string):void{
this._CartService.deletSpecificCartItem(id).subscribe
(
  {
    next:(res:any)=>{console.log(res.data)
      this.cartDetails =res.data
      this._CartService.cartNumber.next(res.
        numOfCartItems
        )

      this._ToastrService.success(res.status)
    },
    error:(err)=>{console.log(err)}
  }
)
}

updateItem(id:string ,newcount:number):void{
if(newcount>0){
  this._CartService.updateProductToCart(id,newcount).subscribe
  (
    {
      next:(res:any)=>{console.log(res.data)
        this.cartDetails =res.data
        this._ToastrService.success(res.status)
      },
      error:(err)=>{console.log(err)}
    }
  )
}
  }
  clearItems():void{
    this._CartService.clearCart().subscribe(
    {
      next:(res:any)=>{console.log(res)
        if(res.message ="success"){
          this.cartDetails={ }as Icart

          this._CartService.cartNumber.next(0)
          this._ToastrService.success(res.status)
        }
      }
    }
    )
  }

}
