import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { CurrencyPipe } from '@angular/common';
import { Order } from '../../interfaces/order';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  ordersData: Order[] = [];
  pageNum: string = '0';
  private destroyRef = inject(DestroyRef);
  constructor(private _OrdersService: OrdersService) {}

  ngOnInit(): void {
    this.loadMoreOrders(this.pageNum);
  }

  loadMoreOrders(change: string) {
    let newPageNum = Number(this.pageNum) + Number(change);
    if (newPageNum <= 1) {
      newPageNum = 1;
    }

    this._OrdersService
      .getAllOrders(String(newPageNum))
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.ordersData = res.data;
        this.pageNum = String(newPageNum);
      });
  }
}
