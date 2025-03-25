import { Component } from '@angular/core';
import { BoxComponent } from '../../components/box/box.component';
import { ChartComponent } from "../../components/chart/chart.component";
import { RouterLink } from '@angular/router';
import { OrdersComponent } from "../orders/orders.component";

@Component({
  selector: 'app-analytics',
  imports: [BoxComponent, ChartComponent, RouterLink, OrdersComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
