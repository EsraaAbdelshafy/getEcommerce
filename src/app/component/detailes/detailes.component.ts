import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Iproduct } from './../../core/interfaces/iproduct';
import { ProductsService } from './../../core/services/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.scss'
})
export class DetailesComponent implements OnInit {
 private readonly _ActivatedRoute=inject(ActivatedRoute)
 private readonly _ProductsService=inject(ProductsService)
 private readonly _CartService= inject(CartService)
 private readonly _ToastrService=inject(ToastrService)


 detalisProduct :Iproduct |null =null

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
      {
        next:(p)=>{
      
          let idProduct = p.get('id')
          this._ProductsService.getSpecificproduct(idProduct).subscribe(
            {
            next:(res:any)=>{ 
              this.detalisProduct= res.data},
            }
          )


        }
      }
    )
}


customOptionsdet: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
autoplayTimeout:2000,
autoplay:true,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  
  nav: false,
}

addProductcart(id:string):void{
  this._CartService.addProductToCart(id).subscribe(
    {
      next:(res:any)=>{
        console.log(res.data)
        this._ToastrService.success(res.message,'freshCart')
        
      },
    
    }
  )



}

}
