import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CategoriesService } from './../../core/services/categories.service';

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Iproduct } from '../../core/interfaces/iproduct';

import { Icategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../core/services/cart.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule ,RouterLink,SearchPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private readonly _ProductsService =inject(ProductsService)
  private readonly _CategoriesService=inject(CategoriesService)
  private readonly _CartService=inject(CartService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
  private readonly _ToastrService=inject(ToastrService)




  customOptionscat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
  customOptionsmain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
   items:1,
    nav: false
  }

 productList:Iproduct[]=[]

//  getAllProductSub !: Subscription


 categoriesList:Icategories[]=[]


 text : string = " "

ngOnInit(): void {

  this._NgxSpinnerService.show('loading-1')

  this._CategoriesService.getAllcategories().subscribe({
    next:(res:any)=>{
      this.categoriesList=res.data
      this._NgxSpinnerService.hide('loading-1')
    }
      ,
   }

    
  )


 this._ProductsService.getAllproduct().subscribe({
  next:(res:any)=>{
    this.productList =res.data},
  error:(err:HttpErrorResponse)=>{console.log(err)}
 });




}

addProductcart(id:string):void{
  this._CartService .addProductToCart(id).subscribe(
    {
      next:(res:any)=>{
        console.log(res);
        this._ToastrService.success(res.message,'freshCart')
        this._CartService.cartNumber.next(res.numOfCartItems)

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err)
      }
    }
  )



}}
