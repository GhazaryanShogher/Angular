import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ElectronicsComponent} from './electronics/electronics.component';
import {ClothingComponent} from './clothing/clothing.component';
import {GroceriesComponent} from './groceries/groceries.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,ElectronicsComponent, ClothingComponent, GroceriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
