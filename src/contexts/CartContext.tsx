import {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";

import type { CartContextData } from "./types";
import type { CartProduct } from "../types/cartProduct";
import cartReducer from "../reducers/cartReducer";
import { toBrazilianCurrency } from "../utils/currencyFormatter";

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, [] as CartProduct[]);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartTotal, setCartTotal] = useState("");

  const { cartAmountTemp, cartTotalTemp } = useMemo((): {
    cartAmountTemp: number;
    cartTotalTemp: number;
  } => {
    return cart.reduce(
      (count, cartProduct) => ({
        cartAmountTemp: count.cartAmountTemp + cartProduct.amount,
        cartTotalTemp:
          count.cartTotalTemp + cartProduct.price * cartProduct.amount,
      }),
      {
        cartAmountTemp: 0,
        cartTotalTemp: 0,
      }
    );
  }, [cart]);

  useEffect(() => {
    setCartAmount(cartAmountTemp);
    setCartTotal(toBrazilianCurrency(cartTotalTemp));
  }, [cartAmountTemp, cartTotalTemp]);

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        cartAmount: cartAmount,
        cartTotalFormatted: cartTotal,
        dispatch: dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export { CartContext };
