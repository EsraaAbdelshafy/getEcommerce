import { HttpErrorResponse } from '@angular/common/http';
import { CategoriesService } from './../../core/services/categories.service';
import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { log } from 'console';
import { Icategories } from '../../core/interfaces/icategories';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { SubcatigoriesService } from '../../core/services/subcatigories.service';
import { Isubcatigories } from '../../isubcatigories';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-categorirs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorirs.component.html',
  styleUrl: './categorirs.component.scss'
})
export class CategorirsComponent implements OnInit {

  private readonly _CategoriesService=inject(CategoriesService)
  private readonly _SubcatigoriesService=inject(SubcatigoriesService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)


subCategoriesList : Isubcatigories[] =[]

 allCategoriesI:Icategories[]=[]

 Categoriessub!:Subscription


ngOnInit(): void {
  this._NgxSpinnerService.show('loading-1')
   this.Categoriessub= this._CategoriesService.getAllcategories().subscribe(
      {
        next:(res:any)=>{console.log(res.data )  
          this.allCategoriesI =res.data
          this._NgxSpinnerService.hide('loading-1')
        },
        error:(err:HttpErrorResponse)=>{console.log(err)}
      }
    )

    this._SubcatigoriesService.getSubCatigoris().subscribe({
      next:(res)=>{console.log(res.data)
        this.subCategoriesList =res.data
      }
    })
}



ngOnDestroy(): void {
 this.Categoriessub?.unsubscribe()
  
}

}
