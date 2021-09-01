import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import {LineChartComponent} from './charts/line-chart/line-chart.component'



@NgModule({
  declarations: [
    AppComponent,
    AreaChartComponent,
    LineChartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DefaultModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }