import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{


private readonly _ProductsService=inject(ProductsService)
private readonly _CartService=inject(CartService)
private readonly _ToastrServic=inject(ToastrService)
private readonly _NgxSpinnerService=inject(NgxSpinnerService)



productList:Iproduct[]=[]

ngOnInit(): void {
  this._NgxSpinnerService.show('loading-1')

  this._ProductsService.getAllproduct().subscribe({
    next:(res:any)=>{
      this.productList =res.data
      this._NgxSpinnerService.hide('loading-1')
    },
   });
}

addProductcart(id:string):void{
  this._CartService.addProductToCart(id).subscribe(
    {
      next:(res:any)=>{
        console.log(res);
        this._ToastrServic.success(res.message,'fresh Cart')
        this._CartService.cartNumber.next(res.numOfCartItems)
        // console.log(this._CartService.cartNumber.next)
        
      },
      
    }
  )



}

}
