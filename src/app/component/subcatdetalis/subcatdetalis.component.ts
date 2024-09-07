import { log } from 'node:console';
import { SubcatigoriesService } from './../../core/services/subcatigories.service';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Init } from 'v8';
import { Isubcatigories } from '../../isubcatigories';

@Component({
  selector: 'app-subcatdetalis',
  standalone: true,
  imports: [],
  templateUrl: './subcatdetalis.component.html',
  styleUrl: './subcatdetalis.component.scss'
})
export class SubcatdetalisComponent implements  OnInit{


  private readonly _SubcatigoriesService=inject(SubcatigoriesService)

  private readonly _ActivatedRoute=inject(ActivatedRoute)

  subcatDetalis :Isubcatigories |null =null

ngOnInit(): void {

  this._ActivatedRoute.paramMap.subscribe(
    {
      next:(p)=>{console.log(p.get('id'))

        let subcatId =p.get('id')

        this._SubcatigoriesService.getSpecificSubCatigoris(subcatId).subscribe({
          next:(res:any)=>{console.log(res)
            this.subcatDetalis =res.data

          }
        })
      }
    }
  )
}


}
