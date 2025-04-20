import type { CartProduct } from "../types/cartProduct";
import type { ActionProps } from "./types";

import { toBrazilianCurrency } from "../utils/currencyFormatter";

const cartReducer = (state: CartProduct[], action: ActionProps) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      if (action.payload.newProduct) {
        let newState: CartProduct[] = [];

        const productIndex = state.findIndex((product) => {
          return product.id === action.payload.newProduct?.id;
        });

        if (productIndex === -1) {
          newState = [
            ...state,
            {
              ...action.payload.newProduct,
              formattedTotalProduct: toBrazilianCurrency(
                action.payload.newProduct.price
              ),
              amount: 1,
            },
          ];

          return newState;
        }

        newState = state.map((product) => {
          if (product.id === action.payload.newProduct?.id) {
            product.amount += 1;
            product.formattedTotalProduct = toBrazilianCurrency(
              product.amount * product.price
            );
          }

          return product;
        });

        return newState;
      }

      return state;
    }

    case "UPDATE_PRODUCT": {
      const product = state.find(
        (cartProduct) => cartProduct.id === action.payload.productId
      );

      if (product) {
        let newState: CartProduct[] = [];

        if (action.payload.productQuantityAction === "INCREASE") {
          newState = state.map((cartProduct) => {
            if (cartProduct.id === action.payload.productId) {
              cartProduct.amount += 1;
              cartProduct.formattedTotalProduct = toBrazilianCurrency(
                cartProduct.amount * cartProduct.price
              );
            }

            return cartProduct;
          });

          return newState;
        }

        if (product.amount > 1) {
          newState = state.map((cartProduct) => {
            if (cartProduct.id === action.payload.productId) {
              cartProduct.amount -= 1;
              cartProduct.formattedTotalProduct = toBrazilianCurrency(
                cartProduct.amount * cartProduct.price
              );
            }

            return cartProduct;
          });

          return newState;
        }

        newState = state.filter(
          (cartProduct) => cartProduct.id !== action.payload.productId
        );

        return newState;
      }

      return state;
    }

    case "DELETE_PRODUCT":
      return state.filter(
        (cartProduct) => cartProduct.id !== action.payload.productId
      );

    default:
      return state;
  }
};

export default cartReducer;
