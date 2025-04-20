import type { Product } from "./product";

export interface CartProduct extends Product {
  amount: number
  formattedTotalProduct: string
}