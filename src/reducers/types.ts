import type { Product } from "../types/product";

export interface ActionProps {
  type: "ADD_PRODUCT" | "DELETE_PRODUCT" | "UPDATE_PRODUCT";
  payload: PayloadData;
};

export type ProductQuantityAction = "INCREASE" | "DECREASE"

interface PayloadData {
  productId?: number;
  productQuantityAction?: ProductQuantityAction
  newProduct?: Product;
};