import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts=Highcharts 
  // property is imported here then declare property binding
  // make options a empty object athilek this. vech value parenj kodukanam objectilek
  chartOptions={}

  constructor(){
    this.chartOptions={

      chart: {
        type: 'column'
    },
    title: {
        text: 'Sales Analytics'
    },
    subtitle: {
        // text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        
        // title: {
        //     text: 'Rainfall (mm)'
        // }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Visitors',
        data: [170, 71, 106, 129, 144, 176, 135, 148, 216,
             ]

    }, {
        name: 'New Messages',
        data: [83, 100, 98, 93, 106, 84, 105, 104, 91, 
            ]

    }, 

    
  
  ]



    }






  }

}
