import type { Dispatch } from "react";
import type { CartProduct } from "../types/cartProduct";
import type { ActionProps } from "../reducers/types";

export interface CartContextData {
  cart: CartProduct[];
  cartAmount: number;
  cartTotalFormatted: string;
  dispatch: Dispatch<ActionProps>
}