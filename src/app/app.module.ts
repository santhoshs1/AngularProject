import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home1Component } from './home1/home1.component';
import { Home3Component } from './home3/home3.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { EaringsComponent } from './earings/earings.component';
import { RingsComponent } from './rings/rings.component';
import { BanglesComponent } from './bangles/bangles.component';
import { DiamondComponent } from './diamond/diamond.component';
// import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HomeComponent,
    Home1Component,
    Home3Component,
    NecklaceComponent,
    EaringsComponent,
    RingsComponent,
    BanglesComponent,
    DiamondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
