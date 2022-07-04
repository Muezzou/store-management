import { StoreService } from './../service/store.service';
import { StatsCategories } from './../models/statsCategories';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  idStore = "ijpxNJLM732vm8AeajMR";

  chartData = [{
    data : [],
    label: ''
  }];

  chartLabels: string[] = [];

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Categories stats ',
      },
    },
  };
  
  constructor( private storeService: StoreService) { }

  ngOnInit(): void {
   this.initChart();
  }

  
initChart(){
  this.storeService.getStatsCategories(this.idStore).subscribe(
    data => {
      for (let item of data){
        this.dataPoint([item.numberOfProducts], item.category);
      }}
  );

}

dataPoint(dataArr :number[] , label: string){

  this.chartData.forEach((dataset, index) => {
    this.chartData[index] = Object.assign({}, this.chartData[index], {
      data: [...this.chartData[index].data, dataArr[index]]
    });
  });
  this.chartLabels = [...this.chartLabels, label];
}
}
