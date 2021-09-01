import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { Component, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

am4core.useTheme(am4themes_animated)

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {

  private chart: am4charts.XYChart | undefined;

  constructor(private zone: NgZone) { };

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("areaChart", am4charts.XYChart);
      let title = chart.titles.create();
      title.text = "Marks";
      chart.dataSource.url = "https://run.mocky.io/v3/4385fc4f-eb62-4d1c-a3ec-bd028baaca52";
      chart.dataSource.parser = new am4core.JSONParser();
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = "Subjects";
      categoryAxis.dataFields.category = "subjects";

      let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = "Marks";
      valueAxisY.renderer.minWidth = 20;

      let seriesNames = ["marks"];
      for (let i=0; i<seriesNames.length; i++) {
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = "subjects";
        series.dataFields.valueY = seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.tooltipText = "Subject: {categoryX} \n marks: ${valueY}";
      }

      chart.legend = new am4charts.Legend();
      this.chart = chart;

    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    })
  }

}
