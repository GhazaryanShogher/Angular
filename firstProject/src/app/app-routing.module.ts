import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElectronicsComponent} from './electronics/electronics.component';
import {ClothingComponent} from './clothing/clothing.component';
import {GroceriesComponent} from './groceries/groceries.component';




const routes: Routes = [];

@NgModule({
  declarations:[ElectronicsComponent, ClothingComponent, GroceriesComponent],
  imports: [
    RouterModule.forRoot([
    { 
      path: 'electronics',
      component: ElectronicsComponent
    },
    { 
      path: 'clothing',
      component: ClothingComponent
    },
    { 
      path: 'groceries',
      component: GroceriesComponent
    },
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
