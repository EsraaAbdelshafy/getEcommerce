import { Ibrand } from './../../interfaces/ibrand';
import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brand-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.scss'
})
export class BrandDetailsComponent implements OnInit {

  private readonly _BrandsService=inject(BrandsService)
  private readonly _ActivatedRoute=inject(ActivatedRoute)

  brandsDetils :Ibrand |null =null


// customOptionsdetBrand: OwlOptions = {
//   loop: true,
//   mouseDrag: true,
//   touchDrag: true,
//   pullDrag: false,
//   dots: false,
// autoplayTimeout:2000,
// autoplay:true,
//   navSpeed: 700,
//   navText: ['', ''],
//   items:1,
  
//   nav: false,
// }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(

      {
        next:(p)=>{console.log(p)

          let idBrand = p.get("id"); 
          this._BrandsService.getSpecificBrands(idBrand).subscribe(
            {
              next:(res:any)=>{console.log(res.data)
                this.brandsDetils =res.data
                


              }
            }
          )

        }
      }
    )
  
  }

}
