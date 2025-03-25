import { Component, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartData: ChartData<'bar'> = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Visits' }],
  };

  
  
}
