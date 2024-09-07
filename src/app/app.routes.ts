import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { CatdetalisComponent } from './component/catdetalis/catdetalis.component';
import { CartComponent } from './component/cart/cart.component';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { CategorirsComponent } from './component/categorirs/categorirs.component';
import { BrandsComponent } from './component/brands/brands.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';
import { DetailesComponent } from './component/detailes/detailes.component';
import { AllordersComponent } from './component/allorders/allorders.component';
import { OrdersComponent } from './component/orders/orders.component';
import { BrandDetailsComponent } from './core/component/brand-details/brand-details.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { SubcatdetalisComponent } from './component/subcatdetalis/subcatdetalis.component';

export const routes: Routes = [
    {path:"",component:AuthLayoutComponent,canActivate:[loginGuard] ,
        children:[
        {path:"",redirectTo:"login" ,pathMatch:'full'},
        {path:"login",component:LoginComponent },
        {path:"register",component:RegisterComponent },
        {path:"forget",component:ForgetpasswordComponent }
    ],},
    {path:"",component:BlankLayoutComponent,canActivate:[authGuard],
        children:[
         {  path:"",redirectTo:"home" ,pathMatch:'full'},
        {path:"home",component:HomeComponent},
        {path:"cart",component:CartComponent},
        {path:"product",component:ProductComponent},
        {path:"categorirs",component:CategorirsComponent},
        {path:"brands",component:BrandsComponent },
        {path:"details/:id",component:DetailesComponent },
        {path:"catdetails/:idcat",component:CatdetalisComponent },
        {path:"allorders",component:AllordersComponent },
        {path:"orders/:id",component:OrdersComponent },
        {path:"brandDetails/:id",component:BrandDetailsComponent },
         {path:"wishList",component:WishListComponent},
         {path:"subcatdetalis/:id",component:SubcatdetalisComponent },

    
        {path:"**",component:NotFoundComponent},
       
    ]},
];
