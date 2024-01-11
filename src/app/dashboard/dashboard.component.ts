import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Q1', 'Q2', 'Q3', 'Q4' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { 
        data: [ 128.000, 125.300, 228.000, 217.900 ], 
        label: 'Projects Volume', 
        backgroundColor: ['#F0CE8E', '#028D97', '#DE793B', '#517594']
      }
    ];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Financial Services Providers', 'Technology Companies', 'Healthcare', 'Retail', 'Cities and Municipalities' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { 
      data: [ 300, 470, 100, 240, 120 ],
      backgroundColor: [
        'rgba(240, 206, 142, 0.7)',
        'rgba(2, 141, 151, 0.7)',
        'rgba(222, 121, 59, 0.7)',
        'rgba(247, 185, 110, 0.7)',
        'rgba(81, 117, 148, 0.7)'
      ],
      borderColor: 'rgb(255,255,255)',
      borderWidth: 2,
    }
  ];
  public polarAreaLegend = true;
  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  //Bar
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2016', '2017', '2018', '2019', '2020', '2021', '2022' ],
    datasets: [
      { 
        data: [ 65, 59, 80, 56, 31, 55, 63 ], 
        label: 'Existing Customers',
        backgroundColor: '#028D97'
      },

      { 
        data: [ 28, 48, 41, 86, 19, 27, 90 ], 
        label: 'New Customers',
        backgroundColor: '#F0CE8E'
      }
    ]
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
