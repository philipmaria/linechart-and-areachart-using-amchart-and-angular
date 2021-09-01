import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public changeChart: string = "Area Chart";
  selected = this.router.navigate(["./charts/area-chart"]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onChangeAmountClicked() {
    if (this.changeChart == "Area Chart") {
      this.router.navigate(["./charts/area-chart"]);
    }
    else if (this.changeChart == "Line Chart") {
      this.router.navigate(["./charts/line-chart"]);
    }
  }

}