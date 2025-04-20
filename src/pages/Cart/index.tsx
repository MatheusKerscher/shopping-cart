import { Link } from "react-router-dom";

import CartProduct from "../../components/CartProduct";
import useCartContext from "../../hooks/useCartContext";

const Cart = () => {
  const { cart, cartTotalFormatted, deleteCartProduct, increaseProductAmount, decreaseProductAmount } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-100">
        <span className="text-gray-400 font-medium">
          Seu carrinho está vazio :(
        </span>

        <Link
          to="/"
          className="mt-6 bg-blue-500 text-white rounded py-1 px-3 cursor-pointer font-medium"
        >
          Descobrir produtos
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4">
      <h1 className="text-center mt-4 mb-8 font-medium text-xl">
        Produtos em alta
      </h1>

      <div className="flex flex-col divide-y divide-gray-300 w-full max-w-4xl mx-auto p-3 pb-0 bg-neutral-50 rounded-lg shadow-lg shadow-gray-200 border-1 border-gray-100">
        {cart.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            {...cartProduct}
            addProduct={() => increaseProductAmount(cartProduct.id)}
            removeProduct={() => decreaseProductAmount(cartProduct.id)}
            deleteProduct={() => deleteCartProduct(cartProduct.id)}
          />
        ))}
      </div>

      {cartTotalFormatted.length > 0 && (
        <div className="mt-6 px-3 flex justify-center md:justify-end items-center gap-2 max-w-4xl mx-auto">
          <span className="font-medium text-sm">Total:</span>

          <span className="font-bold text-base md:text-lg text-blue-500">
            {cartTotalFormatted}
          </span>
        </div>
      )}
    </main>
  );
};

export default Cart;
