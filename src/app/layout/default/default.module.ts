import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LineChartComponent } from 'src/app/charts/line-chart/line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    DefaultComponent,
    LineChartComponent,
    
  ],
  imports: [
    CommonModule, 
   
    RouterModule, 
    HttpClientModule, 
    FormsModule, 
    MatSelectModule, 
    BrowserAnimationsModule
  ]
})
export class DefaultModule { }