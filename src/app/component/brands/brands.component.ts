import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrand } from '../../core/interfaces/ibrand';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit{

  private readonly _BrandsService =inject(BrandsService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)

  brandsList : Ibrand [] =[]

ngOnInit(): void {
  this._NgxSpinnerService.show('loading-1')
    this._BrandsService.getBrands().subscribe(
      {
        next:(res)=>{
         this.brandsList =res.data
         this._NgxSpinnerService.hide('loading-1')
        }
      }
    )
  
}

spicificBrandsDetalis(data:string):void{
  this._BrandsService.getSpecificBrands(data).subscribe(
    {
      next:(res)=>{console.log(res)}
    }
  )
}


}
