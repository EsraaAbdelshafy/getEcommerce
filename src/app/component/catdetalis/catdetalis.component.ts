import { Iproduct } from './../../core/interfaces/iproduct';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, inject, OnInit } from '@angular/core';
import { Icategories } from '../../core/interfaces/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-catdetalis',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './catdetalis.component.html',
  styleUrl: './catdetalis.component.scss'
})
export class CatdetalisComponent implements OnInit {

private readonly _CategoriesService=inject(CategoriesService)
private readonly _ActivatedRoute=inject(ActivatedRoute)


detailsCategires:Icategories |null =null
ngOnInit(): void {

  

  this._ActivatedRoute.paramMap.subscribe({
    next:(p)=>{
      let categoriesId =p.get('idcat')

      this._CategoriesService.getSpecificcategories(categoriesId).subscribe
      ({
        next:(res:any)=>{
            this.detailsCategires=res.data },
            error:(err)=>{console.log(err)}
      })
    },
    error:(err)=>{console.log(err)}

  })
}


customOptionsdetcat: OwlOptions = {
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


}
