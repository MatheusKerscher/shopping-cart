import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import type { ActionProps, ProductQuantityAction } from "../reducers/types";
import type { Product, ProductDetailsProps } from "../types/product";
import toast from "react-hot-toast";

const createProductAction = (newProduct: Product): ActionProps => ({
  type: "ADD_PRODUCT",
  payload: {
    newProduct: newProduct,
  },
});

const updateProductAction = (
  productId: number,
  productQuantityAction: ProductQuantityAction
): ActionProps => ({
  type: "UPDATE_PRODUCT",
  payload: {
    productId: productId,
    productQuantityAction: productQuantityAction,
  },
});

const deleteProductAction = (productId: number): ActionProps => ({
  type: "DELETE_PRODUCT",
  payload: {
    productId: productId,
  },
});

const useCartContext = () => {
  const { cart, cartAmount, cartTotalFormatted, dispatch } =
    useContext(CartContext);

  const addCartProduct = (product: Product | ProductDetailsProps) => {
    dispatch(createProductAction(product));
    toast.success("Produto adicionado ao carrinho")
  };

  const deleteCartProduct = (productId: number) => {
    dispatch(deleteProductAction(productId));
    toast.success("Produto removido do carrinho")
  };

  const decreaseProductAmount = (productId: number) => {
    dispatch(updateProductAction(productId, "DECREASE"));
  };

  const increaseProductAmount = (productId: number) => {
    dispatch(updateProductAction(productId, "INCREASE"));
  };

  return {
    cart,
    cartAmount,
    cartTotalFormatted,
    addCartProduct,
    deleteCartProduct,
    increaseProductAmount,
    decreaseProductAmount,
  };
};

export default useCartContext;
