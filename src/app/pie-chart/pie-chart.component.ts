import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts=Highcharts 

  chartOptions={}

  constructor(){

    this.chartOptions={

      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Global Status Progress',
        align: 'center'
    },
    // subtitle: {
    //     text: 'Source: ' +
    //         '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
    //         'target="_blank"> Research</a>',
    //     align: 'left'
    // },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Progress',
        data: [
            ['Facebook', 15],
            ['Google', 40],
          ['Twitter',10],
            ['LinkedIn',20],
            ['Tesla', 10],
            ['Others', 5]
        ]
    }]
    }
  }

}
