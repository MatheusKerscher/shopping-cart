import CartProduct from "../../components/CartProduct";

const Cart = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-0">
      <h1 className="text-center mt-4 mb-8 font-medium text-xl">
        Produtos em alta
      </h1>

      <div className="flex flex-col divide-y divide-gray-300 w-full max-w-4xl mx-auto p-3 bg-neutral-50 rounded-lg shadow-lg shadow-gray-200 border-1 border-gray-100">
        <CartProduct />
        <CartProduct />
      </div>

      <div className="mt-6 px-3 flex justify-center md:justify-end items-center gap-2 max-w-4xl mx-auto">
        <span className="font-medium text-sm">Total:</span>

        <span className="font-bold text-base md:text-lg">R$ 451564</span>
      </div>
    </main>
  );
};

export default Cart;
