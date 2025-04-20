import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import type { CartProduct } from "../../types/cartProduct";

type CartProductProps = CartProduct & {
  addProduct: () => void;
  removeProduct: () => void;
  deleteProduct: () => void;
};

const CartProduct = ({
  cover,
  title,
  amount,
  formattedPrice,
  formattedTotalProduct,
  addProduct,
  removeProduct,
  deleteProduct,
}: CartProductProps) => {
  return (
    <section className="w-full px-2 py-3 flex flex-col md:flex-row gap-8 justify-around items-center relative">
      <div className="w-full md:w-4/12 flex gap-3 flex-col md:flex-row items-center">
        <img
          className="max-w-30 md:max-w-10 rounded-lg"
          src={cover}
          alt={title}
        />

        <span>{title}</span>
      </div>

      <span className="md:w-2/12">
        <span>Valor:</span> {formattedPrice}
      </span>

      <div className="md:w-2/12 flex gap-2 justify-center items-center">
        <button
          onClick={removeProduct}
          type="button"
          className="bg-orange-500 text-white p-1 rounded-sm cursor-pointer outline-0"
        >
          <FiMinus />
        </button>

        <span>{amount}</span>

        <button
          onClick={addProduct}
          type="button"
          className="bg-orange-500 text-white p-1 rounded-sm cursor-pointer outline-0"
        >
          <FiPlus />
        </button>
      </div>

      <span className="md:w-4/12 text-start md:text-end">
        <span>Sub total:</span> {formattedTotalProduct}
      </span>

      <button
        onClick={deleteProduct}
        className="absolute top-0.5 right-0 text-red-500 cursor-pointer"
      >
        <FiX size={18} />
      </button>
    </section>
  );
};

export default CartProduct;
