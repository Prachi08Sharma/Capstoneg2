import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sharepage/home/home.component';
import { NavabrComponent } from './sharepage/navabr/navabr.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { SofasComponent } from './pages/sofas/sofas.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';
import { DecorComponent } from './pages/decor/decor.component';
import { LightsComponent } from './pages/lights/lights.component';
import { WallComponent } from './pages/wall/wall.component';
import { LoginComponent } from './sharepage/login/login.component';
import { ContactComponent } from './sharepage/contact/contact.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'navbar', component:NavabrComponent},
  {path:'sofas', component:SofasComponent},
  {path:'furniture', component:FurnitureComponent},
  {path:'kitchen',component:KitchenComponent},
  {path:'decor', component:DecorComponent},
  {path:'lights', component:LightsComponent},
  {path:'wall', component:WallComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'AddToCartComponent',component:AddToCartComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
