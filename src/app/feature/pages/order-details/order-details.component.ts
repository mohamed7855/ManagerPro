import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../interfaces/order';
import { OrdersService } from '../../services/orders.service';
import { BoxComponent } from '../../components/box/box.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [BoxComponent, CurrencyPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent {
  orderData!: Order;
  orderId!: string;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _OrdersService: OrdersService
  ) {}
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.orderId = params.get('id')!;
    });

    this.orderData = this._OrdersService.orders.data[this.orderId];
  }
}
