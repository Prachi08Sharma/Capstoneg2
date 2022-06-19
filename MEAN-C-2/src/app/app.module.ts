import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HomeComponent } from './sharepage/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    FooterComponent,
    SofasComponent,
    FurnitureComponent,
    KitchenComponent,
    DecorComponent,
    LightsComponent,
    WallComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    AddToCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
