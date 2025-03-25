import { OrderAPIRes, OrderRes } from "./order";

export interface Adaptar{
    adaptAllOrders(data:OrderAPIRes):OrderRes
}