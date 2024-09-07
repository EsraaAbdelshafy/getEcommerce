import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthnService } from '../../core/services/authn.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit{
  readonly _AuthnService=inject(AuthnService)
  readonly _CartService=inject(CartService)


  countNumber : number =0;
  ngOnInit(): void {
    // this.countNumber= this._CartService.cartNumber.getValue()

    this._CartService.getProductsCart().subscribe({
      next:(res)=>{console.log("cartitems",res)

        this._CartService.cartNumber.next(res.
          numOfCartItems
          )
      }
    })
    this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.countNumber =data ;
      }
    })
  }


}
