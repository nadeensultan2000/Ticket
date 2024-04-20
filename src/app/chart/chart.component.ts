import { Component } from '@angular/core';
import { ChartModule,Chart } from 'angular-highcharts';




@Component({
  selector: 'app-chart',
  standalone: true,
  imports:[ChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  char=new Chart({
    chart: { type:'line'},
     title:{text:'إحصائيات إستخدام القسيمة'},

  series: [
    {
    name:[
      '‌احصائيات'
    ],
    date:[6,9,610,2,3,6,7,0,7,6,4]
} ]as any

  });
}
