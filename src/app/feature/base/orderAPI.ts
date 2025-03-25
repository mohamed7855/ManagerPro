import { Observable } from 'rxjs';
import { OrderRes } from '../interfaces/order';

export abstract class OrdersApi {
  abstract getAllOrders(pageNum:string): Observable<OrderRes>;
}
