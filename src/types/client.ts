import { TOrder } from "./order";

export type TClient = {
  name: string;
  orders: TOrder[];
};
