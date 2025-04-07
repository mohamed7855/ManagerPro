import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { OrdersApi } from '../base/orderAPI';
import { AdaptOrderService } from '../adaptar/adapt.order.service';
import { OrderAPIRes, OrderRes } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService implements OrdersApi {
  constructor(
    private _HttpClient: HttpClient,
    private _AdaptOrderService: AdaptOrderService
  ) {}

  orders: any;

  getAllOrders(pageNum: string): Observable<OrderRes> {
    return this._HttpClient
      .get<OrderAPIRes>(
        `https://ecommerce.routemisr.com/api/v1/orders?page=${pageNum}&limit=15`
      )
      .pipe(
        map((res: OrderAPIRes) => {
          this.orders = res;
          return this._AdaptOrderService.adaptAllOrders(res);
        }),
        catchError((err) => {
          console.log('Error ');
          return throwError(() => new Error(err?.error?.message || 'Failed'));
        })
      );
  }
}
