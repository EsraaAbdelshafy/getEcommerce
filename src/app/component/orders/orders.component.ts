import { OrdersService } from './../../core/services/orders.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{


  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _OrdersService=inject(OrdersService)
  private readonly _NgxSpinnerService=inject(NgxSpinnerService)
 
 


  orders:FormGroup= new FormGroup(
    {
    
        details:new FormControl(null),
        city:new FormControl (null),
        phone:new FormControl(null)
       
    }
  )
  cartId :string | null ="";
  ngOnInit():void{
    this._NgxSpinnerService.show('loading-1')
      this._ActivatedRoute.paramMap.subscribe ({
        next:(params)=>{
           this.cartId =params.get('id') 
           this._NgxSpinnerService.hide('loading-1')
          },
            error:(err)=>{console.log(err)

            }
      })
    
  }
  ordersubmit():void
  {
  console.log(this.orders.value)
    this._OrdersService.checkout(this.cartId,this.orders.value).subscribe(
      {
        next:(res:any)=>{
           console.log(res)
           if(res.status == "success")
           {
            window.open(res.session.url)
           }
           
          },
      }

    )
  }

}
