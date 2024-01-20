import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ngx-apexcharts';

/* Functinalty for Chart */
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Use Ticket',
          data: series.monthDataSeries1.prices,
          color:'#8a74f9'
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'area',
        height: 250,
        zoom: {
          enabled: false,
        },
      },
      fill: {
        colors: ['#8a74f9'],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#8a74f9'],
        width: 3,
      },
      title: {
        text: 'Coupon usage statistics',
        align: 'left',
      },
      subtitle: {
        text: '5/7/2023-5/8/2023',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'category',
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
}

const series = {
  monthDataSeries1: {
    prices: [100, 150, 80, 90, 260, 200, 220, 210, 205, 150, 85, 250],
    dates: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
}
