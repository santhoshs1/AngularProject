import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';
import {Home1Component } from './home1/home1.component';
import {Home3Component } from './home3/home3.component';
import {DiamondComponent } from './diamond/diamond.component';
import {EaringsComponent } from './earings/earings.component';
import {BanglesComponent } from './bangles/bangles.component';
import {RingsComponent } from './rings/rings.component';
import {NecklaceComponent } from './necklace/necklace.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'sample',component:SampleComponent},
  {path:'home1',component:Home1Component},
  {path:'home3',component:Home3Component},
  {path:'diamond',component:DiamondComponent},
  {path:'necklace',component:NecklaceComponent},
  {path:'earings',component:EaringsComponent},
  {path:'rings',component:RingsComponent},
  {path:'bangles',component:BanglesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
