import { Injectable } from '@angular/core';
import { Adaptar } from '../interfaces/adaptar';
import { OrderAPIRes, OrderRes } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class AdaptOrderService implements Adaptar {
  constructor() {}

  adaptAllOrders(data: OrderAPIRes): OrderRes {
    return { results: data.results, data: data.data };
  }
}
