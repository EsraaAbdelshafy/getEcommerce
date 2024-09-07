import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Icart } from '../../core/interfaces/icart';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent  implements OnInit{


  private readonly _CartService=inject(CartService)
  private readonly _ToastrService=inject(ToastrService)

  cartDetails:Icart ={} as Icart
  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe(
      {
        next:(res:any)=>{console.log(res.data)
          this.cartDetails =res.data
        },
        error:(err)=>{console.log(err)}
      }
    )
}



}
