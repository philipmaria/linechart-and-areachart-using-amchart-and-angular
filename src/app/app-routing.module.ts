import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaChartComponent } from './charts/area-chart/area-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { DefaultComponent } from './layout/default/default.component';

const routes: Routes = [
  {path: '', component: DefaultComponent, 
children: [
  
  {
    path: 'charts/line-chart', 
    component: LineChartComponent
  },
  {
    path: 'charts/area-chart', 
    component: AreaChartComponent
  },
  
]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }